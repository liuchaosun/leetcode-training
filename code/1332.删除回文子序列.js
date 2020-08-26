/*
 * @lc app=leetcode.cn id=1332 lang=javascript
 *
 * [1332] 删除回文子序列
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var removePalindromeSub = function (s) {
  // 子序列只要保证相对顺序不变即可
  // 本题最终变为：检查字符串是否是回文
  // 所以本题最多删两次
  // 这题就是在考“理解能力”

  if (s === '') {
    return 0;
  }

  // 双指针前后遍历
  let start = 0,
    end = s.length - 1;
  while (start < end) {
    if (s[start] !== s[end]) {
      // 不是回文，两次
      return 2;
    }
    start++;
    end--;
  }
  // 回文，一次
  return 1;
};
// @lc code=end
