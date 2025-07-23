/**
 * @param {string[]} arr
 * @param {number} k
 * @return {string}
 */
var kthDistinct = function (arr, k) {
  const hashMap = new Map();
  for (let i = 0; i < arr.length; i++) {
    const str = arr[i];
    if (hashMap.has(str)) {
      hashMap.set(str, hashMap.get(str) + 1);
    } else {
      hashMap.set(str, 1);
    }
  }

  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    const str = arr[i];
    if (hashMap.get(str) === 1) {
      count++;
      if (count === k) {
        return str;
      }
    }
  }

  return "";
};

console.log(kthDistinct(["d", "b", "c", "b", "c", "a"], 2));
