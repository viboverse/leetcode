class Solution {
  /**
   * @param {string[]} strs
   * @return {string[][]}
   */
  groupAnagrams(strs) {
    const res = [];

    const myMap = new Map();

    const test = strs.map((el) => el.split("").toSorted().join(""));

    for (let i = 0; i < test.length; i++) {
      if (test[i] === test[i + 1]) {
        const key = myMap.get(i);
      }
      myMap.set(i, [test[i]]);
    }

    return test;
  }
}

const sol = new Solution();

console.log(sol.groupAnagrams(["act", "pots", "tops", "cat", "stop", "hat"]));
