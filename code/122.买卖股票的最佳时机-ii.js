/*
 * @lc app=leetcode.cn id=122 lang=javascript
 *
 * [122] 买卖股票的最佳时机 II
 */

// @lc code=start
/**
 * 贪心算法
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  // * 贪心法 只要后面一天的数值比前一天的大，就可以累积差值
  // 后一天比前一天大，前一天就可以买
  // 后二天比后一天大，则中间不卖，到后二天买，以此类推
  let profit = 0;
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] > prices[i - 1]) {
      profit += prices[i] - prices[i - 1];
    }
  }
  return profit;
};
// @lc code=end
