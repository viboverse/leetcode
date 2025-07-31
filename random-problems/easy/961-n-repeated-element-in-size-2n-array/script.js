/**
 * @param {number[]} nums
 * @return {number}
 */
var repeatedNTimes = function (nums) {
  let mySet = new Set();
  for (let num of nums) {
    if (mySet.has(num)) {
      return num;
    }
    mySet.add(num);
  }
};

// console.log(repeatedNTimes([5, 1, 5, 2, 5, 3, 5, 4]));
console.log(repeatedNTimes([1, 2, 3, 3]));
