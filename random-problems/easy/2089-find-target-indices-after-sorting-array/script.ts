// https://leetcode.com/problems/find-target-indices-after-sorting-array
// 2089-find-target-indices-after-sorting-array — script.ts
// created: 2025-11-18 21:02

function targetIndices(nums: number[], target: number): number[] {
  const res: number[] = [];

  const sorterNums = nums.sort((a, b) => a - b);

  for (let i = 0; i < sorterNums.length; i++) {
    if (sorterNums[i] === target) {
      res.push(i);
    }
  }

  return res;
}

console.log(targetIndices([1, 2, 5, 2, 3], 2));
