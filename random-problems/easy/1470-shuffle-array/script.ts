function shuffle(nums: number[], n: number): number[] {
  const res: number[] = [];
  for (let i = 0; i < n; i++) {
    res.push(nums[i]); // x_i
    res.push(nums[i + n]); // y_i
  }
  return res;
}

console.log(shuffle([2, 5, 1, 3, 4, 7], 3)); // Output: [2, 3, 5,
