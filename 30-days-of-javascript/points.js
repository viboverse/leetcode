// Why ++count instead of count++?
// The difference is in when the value is returned:

// ++count is pre-increment: it increments first, then returns the new value.

// count++ is post-increment: it returns the original value, then increments it

// Learning Point:
// This exercise demonstrates how to manually implement the filter method.
// It shows how to use a callback function (fn) to test each element and index,
// and push the elements that return true into a new array.
// Highlights understanding of higher-order functions and array iteration.

var filter = function (arr, fn) {
  let filteredArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i], i)) {
      filteredArr.push(arr[i]);
    }
  }
  return filteredArr;
};

const lala = [0, 10, 20, 30, 40];

function greaterThan10(n) {
  return n > 10;
}

const test = filter(lala, greaterThan10);

console.log(test);
