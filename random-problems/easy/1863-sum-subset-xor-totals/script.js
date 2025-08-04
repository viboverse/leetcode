/**
 * @param {number[]} nums
 * @return {number}
 */
var subsetXORSum = function (nums) {
  const dfs = (index, xor) => {
    if (index >= nums.length) return xor;

    return dfs(index + 1, xor) + dfs(index + 1, xor ^ nums[index]);
  };

  return dfs(0, 0);
};
