class Solution {
  x;
  /**
   * @param {number[]} nums
   * @param {number} target
   * @return {number[]}
   */
  twoSum(nums, target) {
    const prevMap = new Map();

    for (let i = 0; i < nums.length; i++) {
      const diff = target - nums[i];

      if (prevMap.has(diff)) {
        return [prevMap.get(diff), i];
      }

      console.log(`Diff ${diff}`);

      prevMap.set(nums[i], i);
      console.log(prevMap);
    }

    return [];
  }
}

const sol = new Solution();

console.log(sol.twoSum([4, 5, 3, 4, 2, 5, 1, 3, 6], 10));
