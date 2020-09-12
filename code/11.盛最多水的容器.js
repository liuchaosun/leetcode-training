/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
/**
 * 理解题意:
 *
 * 坐标点为 (i,ai),意味着传入的每个数字将用做高度
 * 求矩形的面积是 宽 * 高,那么可以得到表达式  (I1 - I2)*height
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  // 五毒神掌第一遍
  // 第一种解法 两层循环,分别用一个高度与剩余的其他点高度计算,留下最大值
  // let maxVal = 0;
  // let len = height.length;
  // for (let i = 0; i < len - 1; i++) {
  //   // 注意这里不是从o开始,避免重复取值
  //   for (let j = i + 1; j < len; j++) {
  //     let val = (j - i) * Math.min(height[i], height[j]);
  //     if (val > maxVal) {
  //       maxVal = val;
  //     }
  //   }
  // }
  // return maxVal;
  // 第二种解法: 从左右两边的边界向中间进行收敛,这样的宽度越来越窄,那么想要面积更大就需要
  // 高度更高,因此在收敛的时候就需要高度较矮的柱子收敛
  // let maxVal = 0;
  // for (let left = 0, right = height.length - 1; left < right; ) {
  //   let area = (right - left) * (height[left] <= height[right] ? height[left++] : height[right--]);
  //   if (area > maxVal) {
  //     maxVal = area;
  //   }
  // }
  // return maxVal;
  /**
   * 五毒神掌第二遍
   * 短柱子决定高度，两个柱子之间的差决定宽度
   * 只记得是双指针夹逼，不记得具体写法
   */
  // let maxVal = 0;
  // let len = height.length;
  // let left = 0;
  // let right = len - 1;
  // while (left < right) {
  //   let total = (right - left) * (height[left] < height[right] ? height[left++] : height[right--]);
  //   if (total > maxVal) {
  //     maxVal = total;
  //   }
  // }
  // return maxVal;

  // 第三遍 左右边界
  let maxV = 0;
  let L = 0;
  let R = height.length - 1;

  while (L < R) {
    let total = (R - L) * (height[L] <= height[R] ? height[L++] : height[R--]);
    if (total > maxV) {
      maxV = total;
    }
  }

  return maxV;
};
// @lc code=end
