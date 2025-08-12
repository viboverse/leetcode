function minimumOperations(nums: number[]): number {
  let res = 0;
  for (let i = 0; i < nums.length; i++) {
    const remainder = nums[i] % 3;
    if (remainder === 1 || remainder === 2) {
      res += 1;
    }
  }
  return res;
}

console.log(minimumOperations([1, 2, 3, 4]));
