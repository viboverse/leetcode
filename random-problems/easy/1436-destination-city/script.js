/**
 * @param {string[][]} paths
 * @return {string}
 */
var destCity = function (paths) {
  const starts = new Set(paths.map((pair) => pair[0]));
  console.log(starts);
  for (const pair of paths) {
    const dest = pair[1];
    console.log(dest);
    if (!starts.has(dest)) {
      return dest;
    }
  }
  return starts;
};

console.log(
  destCity([
    ["London", "New York"],
    ["New York", "Lima"],
    ["Lima", "Sao Paulo"],
  ])
);
