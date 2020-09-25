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
  // if (!strs || strs.length === 0) {
  //   return '';
  // }
  // let samePf = strs[0].split('');

  // for (let i = 1, len = strs.length; i < len; i++) {
  //   let tmp = strs[i].split('');
  //   let nspf = [];
  //   for (let j = 0, tlen = tmp.length; j < tlen; j++) {
  //     if (!samePf[j]) {
  //       break;
  //     }
  //     if (tmp[j] === samePf[j]) {
  //       nspf.push(tmp[j]);
  //     } else {
  //       break;
  //     }
  //   }
  //   if (nspf.length === 0) {
  //     return '';
  //   }

  //   samePf = nspf;
  // }

  // return samePf.join('');

  // 第二遍
  // 取第一个字符串，分割为数组，然后遍历
  if (strs == null || strs.length == 0) {
    return '';
  }
  let ans = strs[0] || '';
  for (let i = 1, len = strs.length; i < len; i++) {
    let cur = strs[i];
    if (cur.length < ans.length) {
      ans = ans.substring(0, cur.length);
    }

    for (let j = 0, jlen = ans.length; j < jlen; j++) {
      if (cur[j] !== ans[j]) {
        ans = ans.substring(0, j);
        break;
      }
    }
    if (ans === '') {
      return '';
    }
  }
  return ans;
};
// @lc code=end
