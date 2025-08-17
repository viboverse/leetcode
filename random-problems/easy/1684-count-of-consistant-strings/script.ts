function countConsistentStrings(allowed: string, words: string[]): number {
  // create a set of allowed characters ('a','b' for "ab")
  const allowedSet = new Set(allowed);

  let count = 0;

  for (const word of words) {
    let valid = true;
    // check each character of the word
    for (const ch of word) {
      if (!allowedSet.has(ch)) {
        valid = false; // found a forbidden char -> not consistent
        break; // stop checking this word early
      }
    }
    if (valid) count++;
  }

  return count;
}

console.log(
  countConsistentStrings("ab", ["ad", "bd", "aaab", "baa", "badab", "a"])
);
