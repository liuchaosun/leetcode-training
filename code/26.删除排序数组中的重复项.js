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
 * 此题需要使用双指针法解
 */
var removeDuplicates = function (nums) {
  // 双指针
  // if (nums.length === 0) return 0;
  // let L = 0;
  // for (let R = L + 1, len = nums.length; R < len; R++) {
  //   if (nums[L] !== nums[R]) {
  //     nums[++L] = nums[R];
  //   }
  // }
  // return L + 1;

  // 第二遍--原地改值，用双指针
  if (nums.length === 0) return 0;
  let slow = 0;
  for (let fast = 1; fast < nums.length; fast++) {
    if (nums[slow] !== nums[fast] && ++slow !== fast) {
      nums[slow] = nums[fast];
    }
  }
  return slow + 1;
};
// @lc code=end
