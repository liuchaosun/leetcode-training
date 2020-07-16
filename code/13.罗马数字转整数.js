/*
 * @lc app=leetcode.cn id=13 lang=javascript
 *
 * [13] 罗马数字转整数
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */

let romanHashMap = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

// 通常情况下左边数字大于右边数字
// 判断是否左边大于右边
var romanToInt = function (s) {
  let result = 0;
  let sArr = s.split('');
  for (let i = 0, len = sArr.length; i < len; i++) {
    let cur = romanHashMap[sArr[i]];
    let next = romanHashMap[sArr[i + 1]];
    let val = cur;
    if (next && cur < next) {
      val = next - cur;
      i++;
    }
    result += val;
  }

  return result;
};
// @lc code=end
