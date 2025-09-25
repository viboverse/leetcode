// add-to-array-form-of-integer — script.ts
// created: 2025-09-25 19:59

function addToArrayForm(num: number[], k: number): number[] {
  let number = num.join("");
  let res = number + k;
  return res.toString().split("").map(Number);
}

console.log(addToArrayForm([1, 2, 3, 4], 2));
