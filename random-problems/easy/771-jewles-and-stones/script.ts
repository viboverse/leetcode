function numJewelsInStones(jewels: string, stones: string): number {
  const jewelsSet = new Set(jewels);
  let count = 0;

  stones.split("").forEach((char) => {
    if (jewelsSet.has(char)) {
      count++;
    }
  });
  return count;
}

console.log(numJewelsInStones("aA", "aAAbbbb"));
