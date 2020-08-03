/*
 * @lc app=leetcode.cn id=396 lang=javascript
 *
 * [396] 旋转函数
 */

// @lc code=start
/**
 * @param {number[]} A
 * @return {number}
 */
var maxRotateFunction = function (A) {
  let n = A.length;
  if (n < 2) {
    return 0;
  }

  let fk = 0,
    totalA = 0;
  // 计算出数组的总和以及F(0)的值
  for (let i = 0; i < n; i++) {
    totalA += A[i];
    fk += i * A[i];
  }
  // 计算之后的数据的值 F(i+1) = F(i) + sum(A) - n * A[n-i]
  let max = fk;
  for (let i = 1; i < n; i++) {
    fk += totalA - n * A[n - i];
    if (fk > max) {
      max = fk;
    }
  }
  return max;

};
// @lc code=end
