/**
 * @param {string} s
 * @return {number}
 */
var scoreOfString = function (s) {
  let ascii = s.split("").map((letter) => Number(letter.charCodeAt(letter)));

  let sum = 0;
  for (let i = 0; i < ascii.length; i++) {
    if (!Number(ascii[i + 1])) {
      break;
    }

    let a = Math.abs(ascii[i] - ascii[i + 1]);

    sum += a;
  }

  return sum;
};

let test = "hello";
console.log(scoreOfString(test));
