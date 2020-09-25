/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  // @1 下意识的解法
  // if(x === 0){
  //     return true;
  // }
  // if(x<0 || x % 10 === 0){
  //     return false;
  // }
  // x = '' + x;
  // let len = x.length;
  // // 下标从0开始，前后对称相同
  // let mid = len / 2;
  // for(let i=0;i<mid;i++){
  //     if(x[i] !== x[len-i-1]){
  //         return false;
  //     }
  // }
  // return true;
  // @2 不用字符串--数字翻转一遍看与原值是否相等
  // 这里有两个需要注意的问题是回文数的话数字是正常的，不是回文数翻转之后有溢出的可能
  // if (x < 0) {
  //   return false;
  // }
  // let y = 0,
  //   x0 = x;
  // while (x !== 0) {
  //   // 不是回文数可能会溢出
  //   if (y > Number.MAX_SAFE_INTEGER / 10) {
  //     return false;
  //   }
  //   y = y * 10 + (x % 10);
  //   x = x / 10;
  //   if (x < 1) {
  //     x = 0;
  //   } else {
  //     x = parseInt(x);
  //   }
  // }
  // return y === x0;

  /***********五毒神掌第二遍**********/
  // 理解题意：回文要左右读一致，所以小于0的数字肯定不是
  // 简单的解法可以把数字翻转然后跟原值比较
  // 比较好的解法是 可以采取双指针
  // if (x < 0) {
  //   return false;
  // }
  // let xStr = x + '';
  // let left = 0;
  // let right = xStr.length - 1;
  // while (left < right) {
  //   if (xStr[left] !== xStr[right]) {
  //     return false;
  //   }
  //   left++;
  //   right--;
  // }

  // return true;

  // 第三遍
  // 数字转为字符串，使用双指针
  // if (x < 0) {
  //   return false;
  // }
  // let xStr = x + '';
  // for (let l = 0, r = xStr.length - 1; l < r; l++, r--) {
  //   if (xStr[l] !== xStr[r]) {
  //     return false;
  //   }
  // }
  // return true;
  // 不转为字符串的方式，倒转数字跟原值对比
  if (x < 0) {
    return false;
  }
  let xCopy = x;
  let y = 0;
  while (x !== 0) {
    if (y > Number.MAX_SAFE_INTEGER / 10) {
      return false;
    }
    y = y * 10 + (x % 10);
    x = parseInt(x / 10);
  }
  return y === xCopy;
};

/**
 * 测试用例
 * 12221
 * -121
 * -1
 * 0
 * 122
 */
// @lc code=end
