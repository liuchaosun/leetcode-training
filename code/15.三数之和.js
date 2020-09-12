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
  // let ans = [];
  // const len = nums.length;
  // if (len < 3) return ans;
  // nums.sort((a, b) => a - b); // 时间复杂度 O(nlogn)

  // for (let i = 0; i < len; i++) {
  //   if (nums[i] > 0) return ans; //大于0一定不满足
  //   if (i > 0 && nums[i] === nums[i - 1]) continue; // 去重

  //   let L = i + 1;
  //   let R = len - 1;
  //   while (L < R) {
  //     let sum = nums[i] + nums[L] + nums[R];
  //     if (sum < 0) {
  //       // 左边的值小, L指针需要右移
  //       while (L < R && nums[L] === nums[L + 1]) {
  //         L++;
  //       }
  //       L++;
  //     } else if (sum > 0) {
  //       // 右边值大, R指针需要左移
  //       while (L < R && nums[R] === nums[R - 1]) {
  //         R--;
  //       }
  //       R--;
  //     } else {
  //       ans.push([nums[i], nums[L], nums[R]]);
  //       while (L < R && nums[L] === nums[L + 1]) {
  //         L++;
  //       }
  //       L++;
  //       while (L < R && nums[R] === nums[R - 1]) {
  //         R--;
  //       }
  //       R--;
  //     }
  //   }
  // }

  // return ans;

  /**
   * 五毒第二遍
   * 三元组不能重复所以需要去重--这个是关键
   * 找所有结果需要遍历
   * 结合遍历+去重，进行排序是最佳方案
   */
  // if (!nums || nums.length < 3) {
  //   return [];
  // }
  // let ans = [];
  // nums.sort((a, b) => a - b); // O(nlogn)
  // for (let i = 0, len = nums.length; i < len; i++) {
  //   // 排序后，左边最小不能大于目标数字
  //   if (nums[i] > 0) {
  //     return ans;
  //   }
  //   // 去重
  //   if (i === 0 || nums[i] !== nums[i - 1]) {
  //     let L = i + 1;
  //     let R = len - 1;
  //     while (L < R) {
  //       let sum = nums[i] + nums[L] + nums[R];
  //       if (sum < 0) {
  //         // 左边小： 右移 + 越过相同
  //         while (L <= R && nums[L] === nums[++L]) {}
  //       } else if (sum > 0) {
  //         // 右边大： 左移 + 越过相同
  //         while (L <= R && nums[R] === nums[--R]) {}
  //       } else {
  //         ans.push([nums[i], nums[L], nums[R]]);
  //         while (L <= R && nums[L] === nums[++L]) {}
  //         while (L <= R && nums[R] === nums[--R]) {}
  //       }
  //     }
  //   }
  // }

  // return ans;

  // 第三遍
  // 1. 不能重复，不关心顺序--排序可以帮助去重
  // 2. 降低复杂度，改为固定一个数，找另外两个数的和为当前的数的负值
  let ans = [];
  nums.sort((a, b) => a - b);
  for (let i = 0, len = nums.length; i < len; i++) {
    if (nums[i] > 0) {
      return ans;
    }
    // 去重
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }
    // 左右双指针
    let L = i + 1;
    let R = len - 1;
    while (L < R) {
      let total = nums[i] + nums[L] + nums[R];
      if (total < 0) {
        while (L <= R && nums[L] === nums[++L]) {}
      } else if (total === 0) {
        ans.push([nums[i], nums[L], nums[R]]);
        while (L <= R && nums[L] === nums[++L]) {}
        while (L <= R && nums[R] === nums[--R]) {}
      } else {
        while (L <= R && nums[R] === nums[--R]) {}
      }
    }
  }
  return ans;
};
// @lc code=end
