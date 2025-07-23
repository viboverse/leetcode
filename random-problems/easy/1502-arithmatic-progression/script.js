/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canMakeArithmeticProgression = function (arr) {
  const sorted = arr.sort((a, b) => a - b);

  console.log(sorted);

  const firstDif = sorted[1] - sorted[0];
  for (let i = 2; i < sorted.length; i++) {
    if (sorted[i] - sorted[i - 1] !== firstDif) {
      return false;
    }
  }

  return true;
};

console.log(canMakeArithmeticProgression([1, 2, 4]));
