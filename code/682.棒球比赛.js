/*
 * @lc app=leetcode.cn id=682 lang=javascript
 *
 * [682] 棒球比赛
 */

// @lc code=start
/**
 * 借助一个新的数组，用来存储数值
 * @param {string[]} ops
 * @return {number}
 */
var calPoints = function (ops) {
  // 存的都是数字
  let numsArr = [];
  let total = 0;
  for (let i = 0, len = ops.length; i < len; i++) {
    // 用字符和数字0做比较
    if (ops[i] >= 0 || ops[i] < 0) {
      total += parseInt(ops[i]);
      numsArr.push(parseInt(ops[i]));
    } else if (ops[i] === 'C') {
      total -= numsArr[numsArr.length - 1];
      numsArr.pop();
    } else if (ops[i] === 'D') {
      let d = numsArr[numsArr.length - 1] * 2;
      total += d;
      numsArr.push(d);
    } else {
      let sum = numsArr[numsArr.length - 1] + numsArr[numsArr.length - 2];
      total += sum;
      numsArr.push(sum);
    }
  }
  return total;
};
// @lc code=end
