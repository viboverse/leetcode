// https://leetcode.com/problems/search-insert-position
// 35-search-insert-position — script.ts
// created: 2025-11-18 21:29

function searchInsert(nums: number[], target: number): number {
  let lo = 0;
  let hi = nums.length;

  while (lo < hi) {
    const midIndx = Math.floor(lo + (hi - lo) / 2);
    const midVal = nums[midIndx];

    if (midVal === target) {
      return midIndx;
    }

    if (midVal > target) {
      hi = midIndx;
    } else {
      lo = midIndx + 1;
    }
  }

  return lo;
}

console.log(searchInsert([1, 3, 5, 6], 2));
