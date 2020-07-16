/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (!strs || strs.length === 0) {
    return '';
  }
  let samePf = strs[0].split('');

  for (let i = 1, len = strs.length; i < len; i++) {
    let tmp = strs[i].split('');
    let nspf = [];
    for (let j = 0, tlen = tmp.length; j < tlen; j++) {
      if (!samePf[j]) {
        break;
      }
      if (tmp[j] === samePf[j]) {
        nspf.push(tmp[j]);
      } else {
        break;
      }
    }
    if (nspf.length === 0) {
      return '';
    }

    samePf = nspf;
  }

  return samePf.join('');
};
// @lc code=end
