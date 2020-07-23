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
// 校验字母是否符合有效
var isValidLetters = function (charCode, scode, ecode) {
  return scode <= charCode && charCode <= ecode;
};
// 判断传入的字符是否在 a-zA-Z 之间
var isEnCharacter = function (c) {
  let charCode = c.charCodeAt();
  return isValidLetters(charCode, 97, 122) || isValidLetters(charCode, 65, 90);
};

var lengthOfLastWord = function (s) {
  let wordLen = 0;
  let len = s.length;
  while (len) {
    if (isEnCharacter(s[len - 1])) {
      wordLen++;
    } else if (wordLen) {
      return wordLen;
    }
    len--;
  }

  return wordLen;
};
// @lc code=end
