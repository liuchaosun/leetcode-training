/*
 * @lc app=leetcode.cn id=242 lang=javascript
 *
 * [242] 有效的字母异位词
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  // 第一遍--直接想到的解法，存在冗余
  // if (s.length !== t.length) {
  //   return false;
  // }
  // // 用长度为26的数组存储
  // let wordArr = [];
  // for (let i = 0; i < s.length; i++) {
  //   let code = s[i].charCodeAt() - 'a'.charCodeAt();
  //   if (wordArr[code] !== void 0) {
  //     wordArr[code]++;
  //   } else {
  //     wordArr[code] = 1;
  //   }
  // }
  // for (let i = 0; i < t.length; i++) {
  //   let code = t[i].charCodeAt() - 'a'.charCodeAt();
  //   if (!wordArr[code]) {
  //     return false;
  //   }
  //   wordArr[code]--;
  //   if (wordArr[code] === -1) {
  //     return false;
  //   }
  // }
  // return wordArr.filter((i) => i > 0).length ? false : true;

  // 解法1变换，优化一下代码逻辑
  // if (s.length !== t.length) {
  //   return false;
  // }
  // let wordArr = Array(26).fill(0);
  // for (let i = 0; i < s.length; i++) {
  //   let a_code = 'a'.charCodeAt();
  //   wordArr[s[i].charCodeAt() - a_code]++;
  //   wordArr[t[i].charCodeAt() - a_code]--;
  // }
  // return wordArr.filter((i) => i !== 0).length ? false : true;

  // 解法1再变幻--hash
  if (s.length !== t.length) {
    return false;
  }
  //构造一个hash
  let wordHash = {};
  for (let i = 0; i < s.length; i++) {
    wordHash[s[i]] ? wordHash[s[i]]++ : (wordHash[s[i]] = 1);
  }
  // 检查 hash
  for (let i = 0; i < t.length; i++) {
    if (!wordHash[t[i]]) {
      // 不存在直接结束
      return false;
    }
    wordHash[t[i]]--;
    // 存在数量不同
    if (wordHash[t[i]] < 0) {
      return false;
    }
  }
  // 数量相同，字母种类相同，到这里的肯定为真
  return true;
};
// @lc code=end
