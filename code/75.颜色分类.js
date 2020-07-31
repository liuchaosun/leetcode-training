/*
 * @lc app=leetcode.cn id=75 lang=javascript
 *
 * [75] 颜色分类
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  // let colorMap = {};
  // for (let i = 0; i < nums.length; i++) {
  //   const element = nums[i];
  //   if (colorMap[element]) {
  //     colorMap[element]++;
  //   } else {
  //     colorMap[element] = 1;
  //   }
  // }
  // let n = 0;
  // for (let i = 0; i < nums.length; ) {
  //   if (!colorMap[n]) {
  //     n++;
  //   } else {
  //     nums[i] = n;
  //     i++;
  //     colorMap[n]--;
  //   }
  // }

  // 三指针
  let left = 0,
    curr = 0,
    right = nums.length - 1;
  let tmp = null;
  while (curr <= right) {
    if (nums[curr] === 1) {
      curr++;
    } else if (nums[curr] === 0) {
      tmp = nums[left];
      nums[left] = nums[curr];
      nums[curr] = tmp;
      left++;
      curr++;
    } else {
      tmp = nums[right];
      nums[right] = nums[curr];
      nums[curr] = tmp;
      right--;
    }
  }
};
// @lc code=end
