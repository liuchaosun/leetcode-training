/*
 * @lc app=leetcode.cn id=289 lang=javascript
 *
 * [289] 生命游戏
 */

// @lc code=start
/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function (board) {
  // 左上, 上, 右上, 左, 右, 左下,下,右下
  let dx = [-1, 0, 1, -1, 1, -1, 0, 1];
  let dy = [-1, -1, -1, 0, 0, 1, 1, 1];

  let y = board.length;
  let x = board[0].length;
  // 防止影响原数组需要拷贝一份
  let copy_board = [];
  for (let i = 0; i < y; i++) {
    copy_board.push(new Array(x).fill(0));
    for (let j = 0; j < x; j++) {
      copy_board[i][j] = board[i][j];
    }
  }
  for (let i = 0; i < y; i++) {
    for (let j = 0; j < x; j++) {
      let total = 0;
      for (let k = 0; k < 8; k++) {
        let diffX = j + dx[k];
        let diffY = i + dy[k];
        if (diffX >= 0 && diffX < x && diffY >= 0 && diffY < y) {
          total += copy_board[diffY][diffX];
        }
      }
      // 需要判断细胞数是2还是3
      if (total === 3) {
        // 只要有三个活细胞，当前的细胞下一次状态 一定是活的
        board[i][j] = 1;
      } else if (total === 2 && copy_board[i][j] === 1) {
        board[i][j] = 1;
      } else {
        board[i][j] = 0;
      }
    }
  }
};
// @lc code=end
