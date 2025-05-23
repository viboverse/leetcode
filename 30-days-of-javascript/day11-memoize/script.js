/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
  const cache = new Map();

  return function (...args) {
    const key = JSON.stringify(args);
    if (cache.has(key)) {
      return cache.get(key);
    }

    const result = fn(...args);
    cache.set(key, result);
    return result;
  };
}

const sum = (a, b) => a + b;
const memoizedSum = memoize(sum);

console.log(memoizedSum(2, 2)); // Should call sum → 4
console.log(memoizedSum(2, 2)); // Should use cache → 4
console.log(memoizedSum(1, 2)); // Should call sum → 3
console.log(memoizedSum(2, 1)); // Different input → should call sum → 3
console.log(memoizedSum(3, 1)); // Different input → should call sum → 3
