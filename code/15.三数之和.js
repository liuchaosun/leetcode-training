/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  // 五毒第一遍, 看的题解
  // 解法: 排序 + 一层循环 + 双指针
  // 关键点在于取定一个确定点, 双指针夹逼求和
  // 需要明白: 小的都在左边,大的在右边,因此当和小的时候,左指针要右移,反之亦然
  let ans = [];
  const len = nums.length;
  if (len < 3) return ans;
  nums.sort((a, b) => a - b); // 时间复杂度 O(nlogn)

  for (let i = 0; i < len; i++) {
    if (nums[i] > 0) return ans; //大于0一定不满足
    if (i > 0 && nums[i] === nums[i - 1]) continue; // 去重

    let L = i + 1;
    let R = len - 1;
    while (L < R) {
      let sum = nums[i] + nums[L] + nums[R];
      if (sum < 0) {
        // 左边的值小, L指针需要右移
        while (nums[L] === nums[++L]) {}
      } else if (sum > 0) {
        // 右边值大, R指针需要左移
        while (nums[R] === nums[--R]) {}
      } else {
        ans.push([nums[i], nums[L], nums[R]]);
        while (nums[L] === nums[++L]) {}
        while (nums[R] === nums[--R]) {}
      }
    }
  }

  return ans;
};
// @lc code=end
