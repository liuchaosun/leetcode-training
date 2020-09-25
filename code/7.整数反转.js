/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 *
 * 可以判断是否小于 0 然后转换大于0的数字
 * 也可以在每次判断的时候执行 Math.abs 求绝对值
 * 一定需要提前比对结果
 */
var reverse = function (x) {
  // 记住符号
  // // let symbol = null;
  // // if (x < 0) {
  // //   symbol = '-';
  // //   x = 0 - x;
  // // }

  // let y = 0;
  // let max = Math.pow(2, 31) / 10;
  // while (x !== 0) {
  //   // 按照题意这里需要先判断 @!!!!!!
  //   if (Math.abs(y) > max) {
  //     return 0;
  //   }
  //   y = y * 10 + (x % 10);
  //   x = parseInt(x / 10);
  // }

  // // if (symbol) {
  // //   y = 0 - y;
  // // }
  // return y;

  /*********五毒神掌第二遍******/
  // 采取除10的操作
  // let y = 0;
  // let max = (Math.pow(2, 31) - 1) / 10;
  // while (x !== 0) {
  //   // 检查是否超出
  //   if (Math.abs(y) > max) {
  //     return 0;
  //   }

  //   y = y * 10 + (x % 10);
  //   x = parseInt(x / 10);
  // }

  // return y;

  // 第三遍
  let y = 0;
  let max = (Math.pow(2, 31) - 1) / 10;
  while (x !== 0) {
    if (Math.abs(y) > max) {
      return 0;
    }
    y = y * 10 + (x % 10);

    x = parseInt(x / 10);
  }
  return y;
};
// @lc code=end
