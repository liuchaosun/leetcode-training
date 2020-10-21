/*
 * @lc app=leetcode.cn id=121 lang=javascript
 *
 * [121] 买卖股票的最佳时机
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  // 从后往前遍历
  let slow = prices.length - 1;
  let fast = slow - 1;
  let maxV = 0;
  while (fast >= 0 || slow > 0) {
    let tmp = prices[slow] - prices[fast];
    if (tmp > maxV) {
      maxV = tmp;
    }
    fast--;
    if (fast <= -1) {
      slow--;
      fast = slow - 1;
    }
  }

  return maxV;
};
// @lc code=end
