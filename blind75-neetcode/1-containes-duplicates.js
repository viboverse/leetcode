class Solution {
  /**
   * @param {number[]} nums
   * @return {boolean}
   */
  hasDuplicate(nums) {
    const noDup = new Set(nums);

    if (noDup.size < nums.length) return true;

    return false;
  }
}

const sol = new Solution();
console.log(sol.hasDuplicate([1, 1, 2, 3, 4, 5, 5, 6, 6, 6, 6]));
