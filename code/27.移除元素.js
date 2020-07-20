/*
 * @lc app=leetcode.cn id=27 lang=javascript
 *
 * [27] 移除元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 * 双指针法:注意比对从下标0开始
 */
var removeElement = function (nums, val) {
  if (!nums.length) {
    return 0;
  }
  let i = 0;
  for (let j = 0; j < nums.length; j++) {
    if (val !== nums[j]) {
      nums[i] = nums[j];
      i++;
    }
  }
  return i;
};
// @lc code=end
