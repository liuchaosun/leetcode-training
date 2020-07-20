/*
 * @lc app=leetcode.cn id=28 lang=javascript
 *
 * [28] 实现 strStr()
 */

// @lc code=start
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 * 找相同子串可以使用 kmp
 */
var strStr = function (haystack, needle) {
  if (!needle) {
    return 0;
  }
  if (haystack.length < needle.length) {
    return -1;
  }
  // 暴力解法--父串定一个标记位，然后遍历子串
  let len1 = haystack.length;
  let len2 = needle.length;
  for (let i = 0; i <= len1 - len2; i++) {
    // 子串的每一次遍历都需要与父串的 i+j 比较
    for (let j = 0; j < len2; ) {
      if (needle[j] !== haystack[i + j]) {
        break;
      }
      j++;
      if (j === len2) {
        // 子串走到头, 说明全部遍历成功, 返回当前的标记位 i
        return i;
      }
    }
  }
  // 执行到这, 一定是没有找到
  return -1;
};
// @lc code=end
