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
  // let end = m + n - 1;
  // m--;
  // n--;
  // while (n >= 0) {
  //   if (m >= 0) {
  //     if (nums2[n] >= nums1[m]) {
  //       nums1[end--] = nums2[n--];
  //     } else {
  //       nums1[end--] = nums1[m--];
  //     }
  //   } else {
  //     nums1[end--] = nums2[n--];
  //   }
  // }
  // 第二遍
  // 往 nums1 中合并 nums2，从后向前
  // num2 中数据合并完之后结束，所以边界是 n<0
  // 比较大小，大的在后
  let end = m + n - 1;
  m--;
  n--;
  while (n >= 0) {
    if (m >= 0) {
      // 末尾插入
      if (nums2[n] >= nums1[m]) {
        nums1[end] = nums2[n--];
      } else {
        nums1[end] = nums1[m--];
      }
      end--;
    } else {
      // 只剩下 n 说明剩下的数都比 nums1[0] 小，往前放
      nums1[end--] = nums2[n--];
    }
  }
};
// @lc code=end
