function getSneakyNumbers(nums: number[]): number[] {
  return nums.filter((num, index) => nums.indexOf(num) !== index);
}

console.log(getSneakyNumbers([0, 1, 1, 0]));
