// https://leetcode.com/problems/final-prices-with-a-special-discount-in-a-shop
// 1475-final-prices-with-a-special-discount-in-a-shop — script.ts
// created: 2025-10-20 19:05

function finalPrices(prices: number[]): number[] {
  const res = [...prices];
  const stack: number[] = [];

  for (let i = 0; i < prices.length; i++) {
    while (stack.length && prices[i] <= prices[stack[stack.length - 1]]) {
      const idx = stack.pop()!;
      res[idx] -= prices[i];
    }
    stack.push(i);
  }

  return res;
}

console.log(finalPrices([8, 4, 6, 2, 3])); // [4,2,4,2,3]
