/*
 * @lc app=leetcode.cn id=66 lang=javascript
 *
 * [66] 加一
 */
// @lc code=start
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  // 第一遍
  // 整理可能出现的情况：
  // 1. 5+1=6
  // 2. 89+1=90
  // 3. 99+1= 100
  // for (let i = digits.length - 1; i >= 0; i--) {
  //   digits[i]++;
  //   digits[i] = digits[i] % 10;
  //   if (digits[i] !== 0) {
  //     return digits;
  //   }
  // }
  // digits = Array(digits.length + 1).fill(0);
  // digits[0] = 1;
  // return digits;

  // 自己的解法不好， 参考国际站解法
  // for (let i = digits.length - 1; i >= 0; i--) {
  //   if (digits[i] < 9) {
  //     digits[i]++;
  //     return digits;
  //   }
  //   digits[i] = 0;
  // }
  // digits.unshift(1);
  // return digits;

  // 第二遍
  // 此题的重点是相加之后是否产生进位，产生进位的前提是数字是 9
  // 如果是 9 就进行下一个进制位，否则结束

  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] !== 9) {
      digits[i]++;
      return digits;
    }

    digits[i] = 0;
  }
  // 走到这里说明数字都是 9
  digits.unshift(1);

  return digits;
};
// @lc code=end
