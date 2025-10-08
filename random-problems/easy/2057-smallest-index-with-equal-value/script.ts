// https://leetcode.com/problems/smallest-index-with-equal-value
// 2057-smallest-index-with-equal-value — script.ts
// created: 2025-10-08 08:40

function smallestEqual(nums: number[]): number {
  for (let i = 0; i < nums.length; i++) {
    if (i % 10 === nums[i]) {
      return i;
    }
  }

  return -1;
}
const test = [
  7, 8, 3, 5, 2, 6, 3, 1, 1, 4, 5, 4, 8, 7, 2, 0, 9, 9, 0, 5, 7, 1, 6,
];

console.log(smallestEqual(test));

console.log(test[21]);
