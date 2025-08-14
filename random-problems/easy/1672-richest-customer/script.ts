function maximumWealth(accounts: number[][]): number {
  let maxWealth = 0;

  for (const customer of accounts) {
    const wealth = customer.reduce((sum, bank) => sum + bank, 0);

    maxWealth = Math.max(maxWealth, wealth);
  }

  return maxWealth;
}

console.log(
  maximumWealth([
    [1, 5], // Wealth = 1 + 5 = 6
    [7, 3], // Wealth = 7 + 3 = 10
    [3, 5], // Wealth = 3 + 5 = 8
  ])
); // Output: 10

// console.log(Math.max([20, 30, 40, 70]));
