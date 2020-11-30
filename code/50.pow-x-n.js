/*
 * @lc app=leetcode.cn id=50 lang=javascript
 *
 * [50] Pow(x, n)
 */

// @lc code=start
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
  //   n 小于0时做转换
  if (n < 0) {
    x = 1 / x;
    n = -n;
  }
  return fastPow(x, n);
};
var fastPow = function (x, n) {
  let ans = 1.0;
  // 贡献的初始值为 x
  let x_contribute = x;
  // 在对 N 进行二进制拆分的同时计算答案
  while (n > 0) {
    // 除到最后一定有 n = 1，中间如果遇到也是奇数的也要乘起来
    if (n % 2 === 1) {
      ans *= x_contribute;
    }
    // 数据相乘
    x_contribute *= x_contribute;
    // 二分法
    n = Math.floor(n / 2);
  }
  return ans;
};
// @lc code=end
