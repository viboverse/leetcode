function numIdenticalPairs(nums) {
  let res = 0;
  for (let i = 0; i < nums.length; i++) {
    // console.log(nums[i]);

    for (let j = 0; j < nums.length; j++) {
      if (nums[i] == nums[j] && i < j) {
        // console.log(nums[j]);
        console.log(res);
        res += 1;
      }
    }
  }
  return res;
}
console.log(numIdenticalPairs([1, 2, 3, 1, 1, 3]));
