/*
 * @lc app=leetcode.cn id=136 lang=javascript
 *
 * [136] 只出现一次的数字
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  // 最终的解法--位运算-异或
  for (let i = 1; i < nums.length; i++) {
    nums[0] ^= nums[i];
  }
  return nums[0];
  // 解法1: 不借助额外空间，时间复杂度非线性n*n
  // for (let i = 0; i < nums.length; i++) {
  //   for (let j = 0; j < nums.length; j++) {
  //     if (i !== j && nums[i] === nums[j]) {
  //       break;
  //     }
  //     if (j === nums.length - 1) {
  //       return nums[i];
  //     }
  //   }
  // }
  // 解法2：借助额外空间，时间复杂度线性2n
  // let hashObj = {};
  // for (let i = 0; i < nums.length; i++) {
  //   if (hashObj[nums[i]]) {
  //     hashObj[nums[i]]++;
  //   } else {
  //     hashObj[nums[i]] = 1;
  //   }
  // }
  // for (let i = 0; i < nums.length; i++) {
  //   if (hashObj[nums[i]] === 1) {
  //     return nums[i];
  //   }
  // }
  // 解法3：借助额外空间, 借助集合不重复的特性，将重复的数字去掉，乘2之后减去原数据的值
  // let total = 0;
  // let hashSet = new Set();
  // for (let i = 0; i < nums.length; i++) {
  //   hashSet.add(nums[i]);
  //   total += nums[i];
  // }
  // let num = 0;
  // hashSet.forEach((i) => (num += i));
  // return 2 * num - total;
};
// @lc code=end
