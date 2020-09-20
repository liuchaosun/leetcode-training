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

  // 第二遍--注意题目的坑，非负整数包括0
  if (numRows === 0) {
    return [];
  }
  let ans = [[1]];
  for (let i = 1; i < numRows; i++) {
    let row = [1];
    let preRow = ans[i - 1]; //上一层
    // 注意这里的临界值--每一层的数量与层数有关
    for (let j = 1; j < i; j++) {
      row.push(preRow[j - 1], preRow[j]);
    }
    row.push(1);
    ans.push(row);
  }
  return ans;
};
// @lc code=end
