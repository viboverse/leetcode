function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
  let res: boolean[] = [];
  let largestNum = Math.max(...candies);

  for (let i = 0; i < candies.length; i++) {
    if (candies[i] + extraCandies >= largestNum) {
      res.push(true);
    } else {
      res.push(false);
    }
  }

  return res;
}

console.log(kidsWithCandies([2, 3, 5, 1, 3], 3));
