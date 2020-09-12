/*
 * @lc app=leetcode.cn id=283 lang=javascript
 *
 * [283] 移动零
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  /**
   * 五毒神掌第一遍
   * 想到的解法有：
   * 1. 遇到0删除，然后末尾添加一个0 or 遇到0删除，并计数有几个0，最后一次加入所有的0
   * 2. 双指针法，1个慢指针标记不为0的数据，一个快指针遍历所有数据
   */
  // 解法1 由于加到后面都是0需要去掉添加的0的长度
  // let len = nums.length;
  // for (let i = 0; i < len; ) {
  //   if (nums[i] === 0) {
  //     nums.splice(i, 1);
  //     nums.push(0);
  //     len--;
  //   } else {
  //     i++;
  //   }
  // }

  // 解法2 双指针法--经过阅读外网题解发现，此解即是最优解
  // if (nums == null || nums.length == 0) return;
  // for (let i = 0, j = 0, len = nums.length; i < len; i++) {
  //   if (nums[i]) {
  //     if (i !== j) {
  //       nums[j] = nums[i];
  //       nums[i] = 0;
  //     }
  //     j++;
  //   }
  // }

  /**
   * 五毒神掌第二遍
   * 脑海里只记得这题是双指针解的
   */
  // if (nums === null || nums.length === 0) {
  //   return;
  // }
  // for (let slow = 0, fast = 0, len = nums.length; fast < len; ) {
  //   if (nums[fast] !== 0) {
  //     if (slow !== fast) {
  //       nums[slow] = nums[fast];
  //       nums[fast] = 0;
  //     }
  //     slow++;
  //   }
  //   fast++;
  // }

  // 第三遍 快慢指针
  if (nums === null || nums.length === 0) {
    return;
  }
  for (let slow = 0, fast = 0, len = nums.length; fast < len; fast++) {
    if (nums[fast] !== 0) {
      if (slow !== fast) {
        nums[slow] = nums[fast];
        nums[fast] = 0;
      }
      slow++;
    }
  }
};
// @lc code=end
