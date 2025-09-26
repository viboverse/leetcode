// add-to-array-form-of-integer — script.ts
// created: 2025-09-25 19:59

function addToArrayForm(num: number[], k: number): number[] {
  const res: number[] = [];
  let i = num.length - 1;
  let carry = 0;

  while (i >= 0 || k > 0 || carry > 0) {
    const digit = i >= 0 ? num[i] : 0;
    const kDigit = k % 10;
    const sum = digit + kDigit + carry;

    res.push(sum % 10);
    carry = Math.floor(sum / 10);

    k = Math.floor(k / 10);
    i--;
  }

  return res.reverse();
}

console.log(
  addToArrayForm(
    [1, 2, 6, 3, 0, 7, 1, 7, 1, 9, 7, 5, 6, 6, 4, 4, 0, 0, 6, 3],
    516
  )
);
