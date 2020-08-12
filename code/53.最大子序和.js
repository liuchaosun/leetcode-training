/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子序和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  // 先找出数组中最大的值
  let maxLen = nums.length;
  let maxNum = 0;
  for (let i = 0; i < maxLen; i++) {
    if (nums[i] > maxNum) {
      maxNum = nums[i];
    }
  }

  // 再次遍历数组，用当前的值加上后面的值判断是否大于0，大于0保留，否则不保留
  let total = 0;
  for (let i = 0; i < maxLen; i++) {
    if (total + nums[i] > 0) {
      total += nums[i];
    } else {
      total = 0;
    }
  }
};
// @lc code=end
