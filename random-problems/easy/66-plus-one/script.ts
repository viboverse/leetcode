function plusOne(digits: number[]): number[] {
  let val = BigInt(digits.join("")) + 1n;
  return val.toString().split("").map(Number);
}
