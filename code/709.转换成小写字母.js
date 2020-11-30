/*
 * @lc app=leetcode.cn id=709 lang=javascript
 *
 * [709] 转换成小写字母
 */

// @lc code=start
/**
 * @param {string} str
 * @return {string}
 */
var toLowerCase = function (str) {
  if (!str) {
    return str;
  }
  let strArr = str.split('');
  strArr = strArr.map((item) => {
    let asc = item.charCodeAt();
    if (asc >= 65 && asc <= 90) {
      return String.fromCharCode(asc + 32);
    }
    return item;
  });
  return strArr.join('');
};
// @lc code=end
