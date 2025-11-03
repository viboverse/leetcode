// https://leetcode.com/problems/sqrtx
// 69-sqrtx — script.ts
// created: 2025-11-02 21:33

function mySqrt(x: number): number {
  if (x < 2) return x;

  let left = 1,
    right = Math.floor(x / 2);

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const square = mid * mid;

    if (square === x) {
      return mid;
    } else if (square < x) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return right;
}

console.log(mySqrt(2147483647));
