// https://leetcode.com/problems/height-checker
// 1051-height-checker — script.ts
// created: 2025-11-19 21:54

function heightChecker(heights: number[]): number {
  let error = 0;
  for (let i = 0; i < heights.length; i++) {
    for (let j = 0; j < heights.length - i - 1; j++) {
      if (heights[j] > heights[j + 1]) {
        const tmp = heights[j];
        heights[j] = heights[j + 1];
        error++;
        heights[j + 1] = tmp;
      }
    }
  }
  return error;
}
