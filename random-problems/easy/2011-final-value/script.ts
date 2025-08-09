function finalValueAfterOperations(operations: string[]): number {
  let ans: number = 0;
  for (let i = 0; i < operations.length; i++) {
    if (operations[i].includes("--")) ans--;
    else if (operations[i].includes("++")) ans++;
  }
  return ans;
}
