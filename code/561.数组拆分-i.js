/*
 * @lc app=leetcode.cn id=561 lang=javascript
 *
 * [561] 数组拆分 I
 */

// @lc code=start
/**
 * 这是一个排序题
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function (nums) {
  nums = nums.sort((a, b) => a - b);
  // 排序后取奇数位的数字
  let total = 0;
  for (let i = 0, len = nums.length; i < len; i = i + 2) {
    total += nums[i];
  }
  return total;
};
// @lc code=end
