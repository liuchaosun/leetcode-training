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
  // // 数组遍历法
  // let res = nums[0];
  // // 找出数组中的最大值
  // for (let index = 1; index < nums.length; index++) {
  //   const element = nums[index];
  //   if (element > res) {
  //     res = element;
  //   }
  // }
  // // 连续子数组要相邻，并且相加的结果不能小于 0
  // // 相加的结果仍然小于 0 说明其中一个值过分小应舍弃
  // // 数字累加
  // let total = 0;
  // for (let index = 0; index < nums.length; index++) {
  //   if (total + nums[index] > 0) {
  //     total += nums[index];
  //     // 超出原来的最大值则保留
  //     if (total > res) {
  //       res = total;
  //     }
  //   } else {
  //     total = 0;
  //   }
  // }
  // return res;

  // 动态规划
  let pre = 0;
  let maxAns = nums[0];
  nums.forEach((x) => {
    // 这一步太精髓了，如果 pre 大于0，当前的值也大于0，相加之后更大可以保留
    // 如果当前的值比之前值的和都大，那么只保留当前值
    pre = Math.max(pre + x, x);
    maxAns = Math.max(maxAns, pre);
  });
  return maxAns;
};
// @lc code=end
