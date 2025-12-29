// https://leetcode.com/problems/single-number
// 136-single-number — script.ts
// created: 2025-12-22 20:47

function singleNumber(nums: number[]): number {
  const myMap = new Map();

  for (const num of nums) {
    myMap.set(num, (myMap.get(num) || 0) + 1);
  }

  for (const [key, value] of myMap) {
    if (value === 1) return key;
  }

  return -1;
}

console.log(singleNumber([4, 1, 2, 1, 2]));
