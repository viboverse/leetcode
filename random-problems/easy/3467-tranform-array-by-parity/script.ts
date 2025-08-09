function transformArray(nums: number[]): number[] {
  let res: number[] = [];
  nums.map((num) => {
    if (num % 2 === 0) {
      res.push(0);
    } else {
      res.push(1);
    }
  });
  return res.sort((a, b) => a - b);
}

console.log(transformArray([4, 3, 2, 1]));
