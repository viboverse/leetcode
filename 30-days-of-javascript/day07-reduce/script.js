/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function (nums, fn, init) {
  let val = init;
  if (nums.length === 0) {
    return init;
  }

  for (let i = 0; i < nums.length; i++) {
    val = fn(val, nums[i]);
  }

  return val;
};

const nums = [1, 2, 3, 4, 6];
const nums2 = [];

function sum(accum, curr) {
  return accum + curr;
}

const init = 2;

const test = reduce(nums2, sum, init);

console.log(test);
