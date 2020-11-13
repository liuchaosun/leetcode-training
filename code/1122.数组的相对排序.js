/*
 * @lc app=leetcode.cn id=1122 lang=javascript
 *
 * [1122] 数组的相对排序
 */

// @lc code=start
/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function (arr1, arr2) {
  // 第一遍
  // 遍历 arr2,

  let left = 0;
  for (let i = 0; i < arr2.length; i++) {
    let num = arr2[i];
    for (let j = left; j < arr1.length; j++) {
      if (arr1[j] === num) {
        if (j !== left) {
          // 交换值
          arr1[j] = arr1[left];
          arr1[left] = num;
        }
        left++;
      }
    }
  }

  // 循环走完后，到这里需要看 arr1是否消耗完
  if (left !== arr1.length - 1) {
    let sortArr = arr1.splice(left).sort((a, b) => a - b);
    arr1 = arr1.concat(sortArr);
  }

  return arr1;
};
// @lc code=end
