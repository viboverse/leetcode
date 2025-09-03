const fs = require("fs").promises;
const path = require("path");

async function main() {
  const rawName = process.argv[2];
  if (!rawName) {
    console.error("Usage: node scripts/create-problem.js <folder-name>");
    process.exit(1);
  }

  // sanitize: lowercase, remove non-alphanum (except spaces and dashes),
  // convert spaces to dashes, collapse multiple dashes, trim edge dashes
  const name = rawName
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "") // remove punctuation like '.'
    .replace(/\s+/g, "-") // spaces -> dashes
    .replace(/-+/g, "-") // collapse multiple dashes
    .replace(/^-|-$/g, ""); // trim leading/trailing dashes

  if (!name) {
    console.error("Resulting folder name is empty after sanitization.");
    process.exit(1);
  }

  const base = path.join(process.cwd(), "random-problems", "easy");
  const folder = path.join(base, name);
  const file = path.join(folder, "script.ts");

  try {
    await fs.mkdir(folder, { recursive: true });
  } catch (err) {
    console.error("Failed to create folder:", err);
    process.exit(1);
  }

  const now = new Date();
  const helsinkiTime = new Intl.DateTimeFormat("sv-SE", {
    timeZone: "Europe/Helsinki",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  })
    .format(now)
    .replace(" ", " ");

  const template = `// ${name} — script.ts
// created: ${helsinkiTime}

`;

  try {
    await fs.writeFile(file, template, { flag: "wx" });
    console.log("Created:", file);
  } catch (err) {
    if (err.code === "EEXIST") {
      console.error("File already exists:", file);
    } else {
      console.error("Failed to write file:", err);
    }
    process.exit(1);
  }
}

main();
