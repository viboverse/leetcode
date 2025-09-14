# JavaScript LeetCode Problem Notes

A collection of problem-solving patterns, techniques, and solutions for common algorithmic problems.

---

## String and Array Operations

### 2053. Kth Distinct String in Array

**Learned: Counting frequency with Map**

```javascript
const map = new Map();
for (const str of arr) {
  map.set(str, (map.get(str) || 0) + 1);
}

// Find kth distinct in order
let count = 0;
for (const str of arr) {
  if (map.get(str) === 1) {
    count++;
    if (count === k) return str;
  }
}

// General: Get unique values from array
const unique = [...new Set(arr)];
```

---

### 1502. Can Make Arithmetic Progression From Sequence

**Learned:** How to check if an array can form an arithmetic progression.

**Steps:**

1. **Sort the array numerically** to ensure the numbers are in order.
2. **Find the expected difference** between consecutive elements.
3. **Check all consecutive pairs** to ensure the difference is consistent.

```javascript
// Step 1: Sort array numerically
const sorted = arr.sort((a, b) => a - b); // Sorts the array in ascending order

// Step 2: Find the expected difference
const diff = sorted[1] - sorted[0]; // Difference between the first two elements

// Step 3: Check if all consecutive pairs have the same difference
for (let i = 2; i < sorted.length; i++) {
  if (sorted[i] - sorted[i - 1] !== diff) {
    return false; // Early return if any difference doesn't match
  }
}
return true; // If all pairs match, the array forms an arithmetic progression
```

---

### **Set & Map**

**Learned:** How to remove duplicates with `Set` and store flexible key-value pairs with `Map`.

**Steps:**

1. Pass any iterable (array, string, etc.) to `Set` to store only unique values.
2. Use spread syntax to convert a `Set` back to an array.
3. Use `Map` to store key-value pairs where keys can be any type (including objects).

```javascript
// Step 1: Create a Set (removes duplicates)
const array = [1, 2, 3, 4, 5, "Vahab", true, 5, 5, 1, 2];
const mySet = new Set(array);

// Step 2: Convert Set to Array
const setChangedToArray = [...new Set(array)];

// Step 3: Create a Map (key-value pairs)
const myMap = new Map();
myMap.set("name", "vahab");
const obj = { city: "Rasht" };
myMap.set(obj, "Finland");
```

---

### **Object Key Ordering Rules**

**Learned:** How JavaScript orders object keys by type.

**Steps:**

1. Integer keys → sorted numerically and come first.
2. String keys → keep insertion order after integers.
3. Symbol keys → always come last.

```javascript
const sym1 = Symbol("id");
const sym2 = Symbol("name");

const myObject = {
  name: "saba", // string key
  12: "Vahab", // integer key
  1: "shiva", // integer key
  esm: "ali", // string key
  2: "Janet", // integer key
  [sym1]: "symbol1", // symbol key
  [sym2]: "symbol2", // symbol key
};
```

---

### **Object.values() and Object.entries()**

**Learned:** Extract object data efficiently for iteration and processing. Object.values() gets all values as an array, Object.entries() gets key-value pairs as an array of [key, value] arrays.

**Steps:**

1. Use `Object.values()` when you only need the values from an object.
2. Use `Object.entries()` when you need both keys and values for processing.
3. Both methods ignore Symbol keys and return arrays suitable for iteration.

```javascript
const user = { name: "vahab", age: 25, city: "Helsinki" };

// Object.values() - extract all values
const values = Object.values(user);
console.log(values); // ["vahab", 25, "Helsinki"]

// Object.entries() - extract key-value pairs
const entries = Object.entries(user);
console.log(entries); // [["name", "vahab"], ["age", 25], ["city", "Helsinki"]]

// Use case: frequency counting
const scores = { math: 95, science: 87, english: 92 };
const totalScore = Object.values(scores).reduce((sum, score) => sum + score, 0);
console.log(totalScore); // 274

// Use case: transforming object data
const settings = { theme: "dark", lang: "en", notifications: true };
const settingsArray = Object.entries(settings).map(([key, value]) => ({
  setting: key,
  value: value,
  type: typeof value,
}));
console.log(settingsArray);
// [
//   { setting: "theme", value: "dark", type: "string" },
//   { setting: "lang", value: "en", type: "string" },
//   { setting: "notifications", value: true, type: "boolean" }
// ]

// Use case: filtering object properties
const data = { a: 10, b: 5, c: 15, d: 3 };
const filtered = Object.entries(data)
  .filter(([key, value]) => value > 5)
  .reduce((obj, [key, value]) => ({ ...obj, [key]: value }), {});
console.log(filtered); // { a: 10, c: 15 }
```

---

### **Symbol (ES6 Primitive)**

**Learned:** How to create unique, immutable values with `Symbol` and use them as hidden object keys.

**Steps:**

1. Each `Symbol()` call returns a unique value even if the description is the same.
2. Symbol keys are not shown in `Object.keys()` or `for...in` loops.
3. Use `Object.getOwnPropertySymbols()` to access symbol keys.

```javascript
const symA = Symbol("desc");
const symB = Symbol("desc");
console.log(symA === symB); // false

// Example: hidden property
const secret = Symbol("secret");
const user = { name: "vahab", [secret]: 12345 };

console.log(Object.keys(user)); // ['name']
console.log(user[secret]); // 12345
console.log(Object.getOwnPropertySymbols(user)); // [Symbol(secret)]
```

---

### **Big O Notation Basics**

**Learned:** How to identify algorithm time complexity.

**Steps:**

1. **O(1)** – Constant time, does not grow with input size.
2. **O(n)** – Linear time, grows proportionally with input size.
3. **O(n²)** – Quadratic time, nested loops.
4. **O(log n)** – Logarithmic time, halves the problem space each step.

```javascript
// O(1) Constant time
const getFirstElement = (arr) => arr[0];

// O(n) Linear time
const sumArray = (arr) => arr.reduce((a, b) => a + b, 0);

// O(n²) Quadratic time
const findDuplicates = (arr) => {
  const pairs = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) pairs.push([i, j]);
    }
  }
  return pairs;
};

// O(log n) Logarithmic time
const binarySearch = (arr, target) => {
  let left = 0,
    right = arr.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) return mid;
    if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  return -1;
};
```

---

### **2894. Divisible and Non-divisible Sums Difference**

**Learned:** Avoid creating unnecessary arrays when direct calculations are possible.

**Steps:**

1. Use direct iteration to calculate sums instead of creating intermediate arrays.
2. Separate divisible and non-divisible sums during the iteration.
3. Return the difference between the two sums.

```javascript
// Approach 1: Creating unnecessary arrays (inefficient)
const differenceOfSumsBad = (n, m) => {
  const array = new Array(n).fill().map((_, i) => i + 1); // Creates array first
  // Then processes it - inefficient
  // ...rest of implementation...
};

// Approach 2: Direct calculation without arrays (efficient)
const differenceOfSumsGood = (n, m) => {
  let num1 = 0; // Non-divisible sum
  let num2 = 0; // Divisible sum

  // Work directly with numbers instead of creating arrays first
  for (let i = 1; i <= n; i++) {
    if (i % m === 0) num2 += i; // Add to divisible sum
    else num1 += i; // Add to non-divisible sum
  }

  return num1 - num2; // Return the difference
};

// Example:
console.log(differenceOfSumsGood(10, 3)); // Output: Difference between sums
```

**Why is this approach better?**

- Avoids the overhead of creating and processing arrays.
- Reduces memory usage and improves performance.
- Keeps the implementation simple and focused

---

### **961. N-Repeated Element in Size 2N Array**

**Learned:** Use a `Set` for early termination when detecting duplicates.

**Steps:**

1. Initialize an empty `Set` to track seen elements.
2. Iterate through the array, checking if the current element is already in the `Set`.
3. If it is, return the element immediately as the duplicate. Otherwise, add it to the `Set`.

```javascript
// Optimal Solution: Set-based early termination
const repeatedNTimes = (nums) => {
  const seen = new Set(); // Initialize an empty Set
  for (const num of nums) {
    if (seen.has(num)) {
      return num; // Found duplicate immediately
    }
    seen.add(num); // Add the current number to the Set
  }
};

// Example:
console.log(repeatedNTimes([1, 2, 3, 3])); // Output: 3
console.log(repeatedNTimes([2, 1, 2, 5, 3, 2])); // Output: 2
```

**Why is this approach effective?**

- The `Set` allows for constant-time checks (`has`) and insertions (`add`).
- Since one element appears `n` times (50% of the array), the duplicate is encountered quickly.
- This avoids unnecessary iterations, making the solution efficient.

---

### **1108. Defanging an IP Address**

**Learned:** Replace characters in a string using `replaceAll` or `split/join`.

**Steps:**

1. Use `replaceAll(".", "[.]")` for modern JavaScript (ES2021+).
2. Use `split(".").join("[.]")` for compatibility with older environments.
3. Avoid manual loops for simple replacements.

```javascript
// Best Solution: Use replaceAll (ES2021+)
const defangIPaddr = (address) => address.replaceAll(".", "[.]");

// Alternative for older JS:
const defangIPaddrAlt = (address) => address.split(".").join("[.]");

// Example:
console.log(defangIPaddr("1.1.1.1")); // "1[.]1[.]1[.]1"
```

---

### **Array Methods: unshift(), push(), shift()**

**Learned:** `unshift()` adds to the beginning, `push()` adds to the end, `shift()` removes from the beginning and returns the removed element.

**Steps:**

1. Use `unshift()` to prepend elements to the start of an array (returns new length).
2. Use `push()` to append elements to the end of an array (returns new length).
3. Use `shift()` to remove and return the first element (mutates original array).

```javascript
// Example: Using unshift()
const arr1 = [2, 3, 4];
arr1.unshift(1); // Adds 1 to the beginning
console.log(arr1); // [1, 2, 3, 4]

// Example: Using push()
const arr2 = [1, 2, 3];
arr2.push(4); // Adds 4 to the end
console.log(arr2); // [1, 2, 3, 4]

// Example: Using shift()
const arr3 = [10, 20, 30];
const first = arr3.shift(); // Removes first element
console.log(first); // 10
console.log(arr3); // [20, 30]
```

### **When to Use a Set**

**Learned:** Use a `Set` for quick membership checks, storing unique values, or finding intersections.

**Steps:**

1. Use `has(value)` for O(1) membership checks.
2. Use `Set` to store unique elements and remove duplicates.
3. Use `Set` for efficient intersection or overlap checks between collections.

```javascript
// Example 1: Quick membership check
const jewelsSet = new Set("aA");
console.log(jewelsSet.has("a")); // true
console.log(jewelsSet.has("b")); // false

// Example 2: Remove duplicates
const array = [1, 2, 2, 3, 4, 4];
const uniqueValues = [...new Set(array)];
console.log(uniqueValues); // [1, 2, 3, 4]

// Example 3: Find common elements
const setA = new Set([1, 2, 3]);
const setB = [2, 3, 4];
const common = setB.filter((num) => setA.has(num));
console.log(common); //
```

### **indexOf() for Duplicate Detection**

**Learned:** Compare an element's first-occurrence index with its current index to spot duplicates.

**Steps:**

1. For each element, check if array.indexOf(item) !== current index.
2. Use filter to collect duplicates, then optionally dedupe with a Set.
3. Note: This is simple but O(n^2); prefer a Map/Set for large arrays.

```javascript
// Find duplicates by comparing indexOf() with current index
const array = [1, 2, 3, 2, 4, 5, 4, 5];

// This returns duplicate entries (may include repeats)
const duplicates = array.filter((item, index) => array.indexOf(item) !== index);

console.log(duplicates); // Output: [2, 4, 5]

// To get unique duplicates:
const uniqueDuplicates = [...new Set(duplicates)];
console.log(uniqueDuplicates); // Output: [2, 4, 5]
```

---

### **indexOf() Method**

**Learned:** Returns the first index of a value in an array (or -1 if not found); accepts an optional start index.

**Steps:**

1. Use `array.indexOf(value)` to get the first occurrence index or `-1`.
2. Pass a second argument `fromIndex` to start the search from that position.
3. Compare result to `-1` to check presence or use it in filters to detect duplicates.

```javascript
// indexOf examples and behavior
const beasts = ["ant", "bison", "camel", "duck", "bison"];

console.log(beasts.indexOf("bison")); // Expected output: 1 (first occurrence)

// Start searching from index 2
console.log(beasts.indexOf("bison", 2)); // Expected output: 4 (next occurrence after index 2)

console.log(beasts.indexOf("giraffe")); // Expected output: -1 (not found)
```

---

### **Math.max() With the Spread Operator**

**Learned:** Use `Math.max(...array)` to get the maximum or largest value from an array concisely.

**Steps:**

1. Spread the array into `Math.max`: `Math.max(...numbers)`.
2. Check for empty arrays first ( `Math.max(...[])` -> `-Infinity` ) or provide a fallback.
3. For very large arrays where spreading may be costly, use `reduce` as an alternative.

```javascript
// Example: concise max using spread
const numbers = [3, 7, 2, 8, 5];
const max = Math.max(...numbers);
console.log(max); // Outputs: 8

// Handle empty arrays safely
const nums = [];
const maxSafe = nums.length ? Math.max(...nums) : -Infinity;
console.log(maxSafe); // Outputs: -Infinity

// Alternative for huge arrays (no spreading)
const maxReduce = numbers.reduce((a, b) => Math.max(a, b), -Infinity);
console.log(maxReduce); // Outputs: 8
```

---

### String methods: replace(), replaceAll(), search()

Quick use cases with expected output.

- replace(searchValue, replaceValue)

  - If searchValue is a string → replaces the first occurrence.
  - If searchValue is a RegExp with /g → replaces all matches.

- replaceAll(searchValue, replaceValue)

  - Replaces every occurrence of the substring (or a RegExp with /g).
  - Literal when passed a string (no need to escape special regex chars).

- search(regexp)
  - Returns the index of the first match or -1 if not found. Accepts a RegExp (or a string converted to RegExp).

```javascript
// Examples
const s = "apple banana apple";

// replace: only first occurrence when using a string
console.log(s.replace("apple", "orange")); // -> "orange banana apple"

// replaceAll: all occurrences (ES2021+)
console.log(s.replaceAll("apple", "orange")); // -> "orange banana orange"

// replace with RegExp and /g (works in older runtimes)
console.log(s.replace(/apple/g, "orange")); // -> "orange banana orange"

// replaceAll treats the search string literally:
console.log("a.b.c".replaceAll(".", "-")); // -> "a-b-c"
// with RegExp you must escape the dot:
console.log("a.b.c".replace(/\./g, "-")); // -> "a-b-c"

// search: returns index of first match or -1
console.log(s.search("banana")); // -> 6
console.log(s.search(/apple/)); // -> 0
console.log("abc".search(/d/)); // -> -1

// Alternative for very old environments (no replaceAll):
console.log(s.split("apple").join("orange")); // -> "orange banana orange"
```

---

### 66. Plus One — BigInt version (what it does and how to use)

What it does:

- Joins digits to a string, converts to BigInt, adds 1n, then converts back to an array of numbers.
- Avoids Number precision limits; handles arbitrarily large inputs.

How to use:

- Call with an array of digits (0–9), no leading zeros unless the number is 0.

```javascript
// Implementation
const plusOneBigInt = (digits) => {
  const val = BigInt(digits.join("")) + 1n; // "123" -> 123n -> 124n
  return val.toString().split("").map(Number); // "124" -> [1,2,4]
};

// Examples
console.log(plusOneBigInt([1, 2, 3])); // [1, 2, 4]
console.log(plusOneBigInt([9])); // [1, 0]
console.log(plusOneBigInt([9, 9])); // [1, 0, 0]
```

Notes:

- Don’t mix Number and BigInt in arithmetic (use 1n, not 1).
- BigInt drops leading zeros (e.g., [0,0,1] -> [1]); LeetCode usually disallows leading zeros.
