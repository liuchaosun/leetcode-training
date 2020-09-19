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

  // 第二遍
  // 原地：直接操作原始数组，将数字前移
  // 长度：不重复的数据个数

  let slow = 0;
  let fast = 1;
  for (; fast < nums.length; fast++) {
    if (nums[slow] !== nums[fast]) {
      // 这里也可以加个判断， slow+1 !== fast 再赋值，否则直接 slow++
      nums[++slow] = nums[fast];
    }
  }

  return slow + 1;
};
// @lc code=end
