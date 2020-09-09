/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */

// @lc code=start
/**
 * 本题题意需要倒过来理解：
 * 每次可以爬1或2个，那么意味着最后一次需要站在 n-1 或者 n-2台阶上
 * 假设 f(n)是到达第n个台阶的所有可能，那么到达第 n-1 台阶的可能就是 f(n-1)
 * 所以可以得到 f(n) = f(n-1)+ f(n-2)   (n>=2)
 *
 * Fibonacci 数列
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  // 第一遍
  // 添加一个数组，用来存放已经求过的值，用空间换时间
  let fibMap = [0, 1, 2, 3];
  var Fibonacci = function (n) {
    if (n <= 3) {
      return fibMap[n];
    }
    if (fibMap[n]) {
      return fibMap[n];
    }
    fibMap[n] = Fibonacci(n - 1) + Fibonacci(n - 2);
    return fibMap[n];
  };

  return Fibonacci(n);
};
// @lc code=end
