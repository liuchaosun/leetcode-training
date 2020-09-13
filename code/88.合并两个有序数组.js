/*
 * @lc app=leetcode.cn id=88 lang=javascript
 *
 * [88] 合并两个有序数组
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  // 第一遍
  let end = m + n - 1;
  m--;
  n--;
  while (n >= 0) {
    if (m >= 0) {
      if (nums2[n] >= nums1[m]) {
        nums1[end--] = nums2[n--];
      } else {
        nums1[end--] = nums1[m--];
      }
    } else {
      nums1[end--] = nums2[n--];
    }
  }
};
// @lc code=end
