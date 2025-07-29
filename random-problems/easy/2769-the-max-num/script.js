/**
 * LeetCode #2769: Find the Maximum Achievable Number
 * https://leetcode.com/problems/find-the-maximum-achievable-number/description/?envType=problem-list-v2&envId=n3gita2e
 *
 * @param {number} num
 * @param {number} t
 * @return {number}
 */
var theMaximumAchievableX = function (num, t) {
  const x = num + t + t;
  return x;
};

console.log(theMaximumAchievableX(4, 1));
