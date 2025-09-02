function reverseOnlyLetters(s: string): string {
  const isLetter = (ch: string) => /[A-Za-z]/.test(ch);

  const arr = s.split("");
  let i = 0;
  let j = arr.length - 1;

  while (i < j) {
    if (!isLetter(arr[i])) {
      i++;
      continue;
    }
    if (!isLetter(arr[j])) {
      j--;
      continue;
    }
    [arr[i], arr[j]] = [arr[j], arr[i]];
    i++;
    j--;
  }

  return arr.join("");
}
