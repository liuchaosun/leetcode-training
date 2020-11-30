/*
 * @lc app=leetcode.cn id=58 lang=javascript
 *
 * [58] 最后一个单词的长度
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  s = s.trim();
  if (!s) {
    return 0;
  }
  //  从右往左
  s = s.split('');
  let right = s.length - 1;
  let start = 0;
  while (right) {
    if (s[right] !== ' ') {
      if (start === 0) {
        start = right;
      }
    } else if (start > 0) {
      return start - right;
    }
    right--;
  }
  return s.length;
};
// @lc code=end
