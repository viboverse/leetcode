function smallestEvenMultiple(n: number): number {
  let res;

  if (n % 2 === 0) {
    res = n;
  } else {
    res = 2 * n;
  }

  return res;
}
