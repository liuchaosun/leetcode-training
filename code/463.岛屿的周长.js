/*
 * @lc app=leetcode.cn id=463 lang=javascript
 *
 * [463] 岛屿的周长
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function (grid) {
  // 判断下、右是否有格子，有就加1，最后减去重复的
  let land = 0;
  let repeat = 0;
  for (let i = 0; i < grid.length; i++) {
    let inner = grid[i];
    for (let j = 0; j < inner.length; j++) {
      if (grid[i][j] === 1) {
        land++;
        // 右边的也是岛屿
        if (grid[i][j + 1] === 1) {
          repeat++;
        }
        if (grid[i + 1] && grid[i + 1][j] === 1) {
          repeat++;
        }
      }
    }
  }
  return land * 4 - repeat * 2;
};
// @lc code=end
