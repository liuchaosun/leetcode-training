/*
 * @lc app=leetcode.cn id=1189 lang=javascript
 *
 * [1189] “气球” 的最大数量
 */

// @lc code=start
/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function (text) {
  let target = ['b', 'a', 'l', 'l', 'o', 'o', 'n'];
  let tlen = target.length;
  if (text.length < tlen) {
    return 0;
  }

  // 遍历生成字典树
  let charMap = {};
  for (var char of text) {
    if (charMap[char]) {
      charMap[char]++;
    } else {
      charMap[char] = 1;
    }
  }

  // 待检查数组长度符合
  let result = 0;
  while (charMap[target[0]] > 0) {
    for (let i = 0; i < tlen; i++) {
      if (charMap[target[i]] > 0) {
        charMap[target[i]]--;
      } else {
        return result;
      }
    }
    result++;
  }

  return result;
};
// @lc code=end
