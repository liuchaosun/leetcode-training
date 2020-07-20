/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除排序数组中的重复项
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 * 此题关键在于不对原始数据的长度进行修改，而是将前若干位的数据值修改，
 * 最后通过返回的长度进行截取数据
 * 此题需要使用双指针法解: i是慢指针 j是快指针
 */
var removeDuplicates = function (nums) {
  if (nums.length === 0) return 0;
  let i = 0;
  for (let j = 1; j < nums.length; j++) {
    if (nums[i] !== nums[j]) {
      // 如果不相等,i后移一位，将 j 位置的值赋值给新的i位置
      i++;
      nums[i] = nums[j];
    }
  }

  return i + 1;
};
// @lc code=end
