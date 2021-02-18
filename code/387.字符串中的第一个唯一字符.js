/*
 * @lc app=leetcode.cn id=387 lang=javascript
 *
 * [387] 字符串中的第一个唯一字符
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  // if (s.length === 1) {
  //   return 0;
  // }
  // // 双指针
  // s = s.split('');
  // let hash = {};
  // for (let i = 0; i < s.length; i++) {
  //   if (hash[s[i]]) {
  //     hash[s[i]]++;
  //   } else {
  //     hash[s[i]] = 1;
  //   }
  // }

  // for (let i = 0; i < s.length; i++) {
  //   if (hash[s[i]] === 1) {
  //     return i;
  //   }
  // }

  // 暴力法  两次循环遍历--不写了

  // 计数,遍历
  // let hash = {};
  // for (let i = 0, len = s.length; i < len; i++) {
  //   if (hash[s[i]]) {
  //     hash[s[i]]++;
  //   } else {
  //     hash[s[i]] = 1;
  //   }
  // }

  // for (let i = 0; i < s.length; i++) {
  //   if (hash[s[i]] === 1) {
  //     return i;
  //   }
  // }

  let charArr = new Array(256);
  for (let i = 0, len = s.length; i < len; i++) {
    let ss = s[i].charCodeAt();
    if (charArr[ss] !== void 0) {
    }
  }

  return -1;
};
// @lc code=end
