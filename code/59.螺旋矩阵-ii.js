/*
 * @lc app=leetcode.cn id=59 lang=javascript
 *
 * [59] 螺旋矩阵 II
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
  // 第一步 创建空的矩阵
  // let matrix = [];
  // for (let i = 0; i < n; i++) {
  //   matrix.push(new Array(n).fill(0));
  // }
  // // 填入数字从1开始，直到 n*n
  // let num = 1,
  //   final = n * n;
  // let x = 0,
  //   y = 0;
  // // 初始值填入数组
  // matrix[y][x] = num;
  // num++;
  // while (num <= final) {
  //   // 顺时针填入数据则 从左到右，从上到下，从右到左，从下到上
  //   // 每一次变动方向需要判断条件
  //   // 从左到右不能触及边界 x <= n-1 从上到下不能触及边界 y <= n - 1
  //   // 从右到左不能触及边界 x >= 0 从下到上不能触及边界 y>0
  //   // 起步，向右走一步
  //   x++;
  //   // 向右
  //   while (x <= n - 1 && !matrix[y][x]) {
  //     matrix[y][x] = num;
  //     x++;
  //     num++;
  //   }
  //   // 转向, 向下
  //   x--;
  //   y++;
  //   while (y <= n - 1 && !matrix[y][x]) {
  //     matrix[y][x] = num;
  //     y++;
  //     num++;
  //   }
  //   // 转向， 向左
  //   x--;
  //   y--;
  //   while (x >= 0 && !matrix[y][x]) {
  //     matrix[y][x] = num;
  //     x--;
  //     num++;
  //   }
  //   // 转向， 向上
  //   x++;
  //   y--;
  //   while (y >= 0 && !matrix[y][x]) {
  //     matrix[y][x] = num;
  //     y--;
  //     num++;
  //   }
  //   y++;
  // }

  // return matrix;

  // 第一步 创建空的矩阵
  let matrix = [];
  for (let i = 0; i < n; i++) {
    matrix.push(new Array(n).fill(0));
  }
  let top = 0,
    right = n - 1,
    bottom = n - 1,
    left = 0;
  let num = 1,
    final = n * n;
  // 第二步 顺时针走数
  // matrix[y][x] 横向改变x 纵向改变y
  while (num <= final) {
    // 左到右,top不变
    for (let i = left; i <= right; i++) {
      matrix[top][i] = num++;
    }
    // 上边界收缩
    top++;

    // 右上到右下, right 不变
    for (let i = top; i <= bottom; i++) {
      matrix[i][right] = num++;
    }
    // 右边界收缩
    right--;

    // 右下到左下, bottom 不变
    for (let i = right; i >= left; i--) {
      matrix[bottom][i] = num++;
    }
    // 下边界收缩
    bottom--;

    // 左下到左上，left 不变
    for (let i = bottom; i >= top; i--) {
      matrix[i][left] = num++;
    }
    // 左边界收缩
    left++;
  }
  return matrix;
};
// @lc code=end
