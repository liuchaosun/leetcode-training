/*
 * @lc app=leetcode.cn id=867 lang=javascript
 *
 * [867] 转置矩阵
 */

// @lc code=start
/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var transpose = function (A) {
  // 第一遍
  // 暴力解法
  // if (!A || A.length < 1 || A[0].length < 1) {
  //   return A || [];
  // }
  // let xLen = A[0].length;
  // let ans = Array(xLen)
  //   .fill(0)
  //   .map((item) => (item = []));
  // for (let x = 0; x < xLen; x++) {
  //   for (let y = 0; y < A.length; y++) {
  //     ans[x][y] = A[y][x];
  //   }
  // }
  // return ans;

  // 国际站上的解法---人被秀傻了
  // return A[0].map((_, i) => A.map((b) => b[i]));

  // 第二遍
  if (!A || A.length < 1 || A[0].length < 1) {
    return A || [];
  }
  let ans = [];
  let xlen = A[0].length;
  for (let i = 0; i < xlen; i++) {
    ans.push([]);
  }
  for (let i = 0; i < xlen; i++) {
    for (let j = 0; j < A.length; j++) {
      ans[i][j] = A[j][i];
    }
  }
  return ans;
};
// @lc code=end
