// 2000-reverse-prefix-of-word — script.ts
// created: 2025-09-12 22:52

function reversePrefix(word: string, ch: string): string {
  const index = word.indexOf(ch);

  if (index === -1) return word;

  const reversed = word
    .slice(0, index + 1)
    .split("")
    .reverse()
    .join("");

  return reversed + word.slice(index + 1);
}
