/*
 * @lc app=leetcode.cn id=474 lang=javascript
 *
 * [474] 一和零
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var findMaxForm = function (strs, m, n) {
  // 从前往后遍历，记录每个遍历过程中满足条件的数据
  let ans = 0;

  function rec(str) {
    let tmp0 = 0;
    let tmp1 = 0;
    for (let index = 0; index < str.length; index++) {
      const element = str[index];
      if (element === '0') {
        tmp0++;
      }
      if (element === '1') {
        tmp1++;
      }
    }
    if (m >= tmp0 && n >= tmp1) {
      ans++;
      m = m - tmp0;
      n = n - tmp1;
    }
    if (m === 0 && n === 0) {
      return false;
    }

    return true;
  }

  for (let index = 0; index < strs.length; index++) {
    const str = strs[index];
    rec(str);
  }

  return ans;
};
// @lc code=end
