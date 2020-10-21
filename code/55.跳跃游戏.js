/*
 * @lc app=leetcode.cn id=55 lang=javascript
 *
 * [55] 跳跃游戏
 */

// @lc code=start
/**
 * 贪心算法
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  // 第一遍
  // 从后往前贪心
  if (nums === null) {
    return false;
  }
  let endReachable = nums.length - 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    // 站在 i 的位置，跳 nums[i] 步，可以到达位置 endReachable
    if (i + nums[i] >= endReachable) {
      endReachable = i;
    }
  }
  return endReachable === 0;
};
// @lc code=end
