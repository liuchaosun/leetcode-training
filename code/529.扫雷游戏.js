/*
 * @lc app=leetcode.cn id=529 lang=javascript
 *
 * [529] 扫雷游戏
 */

// @lc code=start
/**
 * n-s 不满足游戏要求，需要重启
 * g-g 存在挖出的雷 游戏结束
 *
 * @param {character[][]} board
 * @param {number[]} click
 * @return {character[][]}
 */

// 游戏状态
// let GAME_STATUS = {
//   // 游戏需要重新创建
//   resetStart: 'r-s',
//   // 游戏结束
//   gameOver: 'g-g',
//   // 当前点击无效
//   invalidClick: 'i-c',
// };
// 棋子状态
let CHESSMAN_STATUS = {
  // M 表示未挖出的地雷
  landMine: 'M',
  // 'E' 代表一个未挖出的空方块
  emptySquare: 'E',
  // 'B'代表已挖出的空白方块,且周围没雷
  safeEmptySquare: 'B',
  // 'X' 表示已挖出的地雷
  outLandMine: 'X',
};
var updateBoard = function (board, click) {
  // // 没有棋盘
  // if (!board || !Array.isArray(board) || board.length < 1) {
  //   //  GAME_STATUS.resetStart;
  //   return board;
  // }

  let ymax = board.length,
    xmax = board[0].length ? board[0].length : 0;

  // // 检查初始数组是否是结束状态
  // for (let y = 0; y < ymax; y++) {
  //   for (let x = 0; x < xmax; x++) {
  //     if (board[y][x] === CHESSMAN_STATUS.outLandMine) {
  //       //  GAME_STATUS.gameOver;
  //       return board;
  //     }
  //   }
  // }

  // 当前点击是“雷”则结束
  if (board[click[0]][click[1]] === CHESSMAN_STATUS.landMine) {
    board[click[0]][click[1]] = CHESSMAN_STATUS.outLandMine;
    return board;
  }
  // 点击位无效， 原样返回
  if (board[click[0]][click[1]] !== CHESSMAN_STATUS.emptySquare) {
    return board;
  }

  // 待搜索队列中放入起始点
  let borderQueue = [click];
  // 判断点击的函数
  const judgeClick = function ([ypos, xpos]) {
    // 检查是否到边界
    if (ypos < 0 || xpos < 0 || ypos >= ymax || xpos >= xmax) {
      return;
    }
    // 判断当前位是否有效，已经处理过的位置不再处理
    if (board[ypos][xpos] !== CHESSMAN_STATUS.emptySquare) {
      return;
    }
    // 检查周边8个位置，计算数量
    let xDif = [-1, 0, 1, 1, 1, 0, -1, -1];
    let yDif = [-1, -1, -1, 0, 1, 1, 1, 0];
    let landMineNum = 0;
    let savedPos = [];
    for (let i = 0; i < 8; i++) {
      // 检查边界
      let xpd = xpos + xDif[i];
      let ypd = ypos + yDif[i];
      if (ypd >= 0 && ypd < ymax && xpd >= 0 && xpd < xmax) {
        if (board[ypd][xpd] === CHESSMAN_STATUS.landMine) {
          landMineNum++;
        }
        if (landMineNum === 0) {
          savedPos.push([ypd, xpd]);
        }
      }
    }
    if (landMineNum) {
      // 大于0 则修改当前点，结束
      board[ypos][xpos] = landMineNum + '';
    } else {
      // 本来应该一把过的代码，就因为忘记这里修改状态，导致花费大量时间检查
      board[ypos][xpos] = CHESSMAN_STATUS.safeEmptySquare;
      // 周边没有雷，把周边的点都存上
      borderQueue = borderQueue.concat(savedPos);
    }
  };

  // 深度优先算法， 队列中所有数据处理完结束
  while (borderQueue.length > 0) {
    // 取出第一个点
    let pos = borderQueue.shift();
    // 检查当前点击
    judgeClick(pos);
  }

  return board;
};
// @lc code=end
