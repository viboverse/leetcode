// 2974-minimum-number-game — script.ts
// created: 2025-09-14 19:21

function numberGame(nums: number[]): number[] {
  const res: number[] = [];
  const sorted = [...nums].sort((a, b) => a - b); // work on a copy

  while (sorted.length > 0) {
    const alicePick = sorted.splice(0, 1)[0]; // remove min (Alice)
    const bobPick = sorted.splice(0, 1)[0]; // remove next min (Bob)
    res.push(bobPick, alicePick); // Bob appends first, then Alice
  }

  return res;
}

console.log(numberGame([5, 4, 2, 3]));
