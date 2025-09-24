// 507-perfect-number — script.ts
// created: 2025-09-24 19:52

function checkPerfectNumber(num: number): boolean {
  let allDivisors: number[] = [];
  let divisors: number[] = [];
  let sum = 0;

  for (let i = 1; i < num; i++) {
    allDivisors.push(i);
  }

  for (let i = 0; i < allDivisors.length; i++) {
    if (num % allDivisors[i] === 0) {
      divisors.push(allDivisors[i]);
      sum += allDivisors[i];
    }
  }

  return num === sum;
}

console.log(checkPerfectNumber(28));
