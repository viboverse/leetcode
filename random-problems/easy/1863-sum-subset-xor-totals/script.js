/**
 * @param {number[]} nums
 * @return {number}
 */
var subsetXORSum = function (nums) {
  let sum = 0;
  for (let num of nums) {
    sum ^= num;
    console.log(sum);
  }
  return sum;
};

console.log(subsetXORSum([5, 1, 6]));
