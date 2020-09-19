/*
 * @lc app=leetcode.cn yd=118 lang=javascript
 *
 * [118] 杨辉三角
 */

// @lc code=start
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  // 暴力法
  // if (numRows === 0) {
  //   return [];
  // }
  // let ans = [[1]];
  // for (let y = 1; y < numRows; y++) {
  //   let row = [1];
  //   let preRow = ans[y - 1];
  //   for (let x = 1; x < y; x++) {
  //     row.push(preRow[x - 1] + preRow[x]);
  //   }
  //   row.push(1);
  //   ans.push(row);
  // }
  // return ans;

  // 第二遍 错位相加
  if (numRows === 0) {
    return [];
  }
  let ans = [[1]];
  for (let i = 1; i < numRows; i++) {
    let pre = ans[i - 1];
    let preR = [...pre, 0];
    let preL = [0, ...pre];
    let n = [];
    for (let j = 0; j < preR.length; j++) {
      n.push(preR[j] + preL[j]);
    }
    ans.push(n);
  }
  return ans;
};
// @lc code=end
