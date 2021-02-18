/*
 * @lc app=leetcode.cn id=509 lang=javascript
 *
 * [509] 斐波那契数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
  // // 解法1 暴力解法--直接按照公式计算
  // if (n === 0) {
  //   return 0;
  // }
  // if (n === 1 || n === 2) {
  //   return 1;
  // }
  // return fib(n - 1) + fib(n - 2);

  // // 解法2 添加备忘录，解决节点重复计算问题
  // if (n === 0) {
  //   return 0;
  // }
  // let dpTable = [];
  // function helper(ans, n) {
  //   if (n < 3) {
  //     return 1;
  //   }
  //   // 从“备忘录”中取已经存在的数据
  //   if (ans[n] !== void 0) {
  //     return ans[n];
  //   }
  //   // 不存在则记录
  //   ans[n] = helper(ans, n - 1) + helper(ans, n - 2);
  //   return ans[n];
  // }
  // return helper(dpTable, n);

  // // 解法3 使用动态规划，自底向上解决问题
  // let ans = [0, 1, 1];
  // for (let index = 3; index <= n; index++) {
  //   ans[index] = ans[index - 1] + ans[index - 2];
  // }
  // return ans[n];

  // 解法4 优化动态规划
  // 由于当前状态只与前两个状态有关，新增两个变量
  if (n === 0) {
    return 0;
  }
  let prev = 0; // f(0)
  let curr = 1; // f(1)
  for (let index = 2; index <= n; index++) {
    // f(2) = f(1) + f(0)
    let sum = prev + curr;
    prev = curr;
    curr = sum;
  }
  return curr;
};

// @lc code=end
