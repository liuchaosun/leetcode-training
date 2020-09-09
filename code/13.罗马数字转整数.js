/*
 * @lc app=leetcode.cn id=13 lang=javascript
 *
 * [13] 罗马数字转整数
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */

let RomanHashMap = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

// 通常情况下左边数字大于右边数字
// 判断是否左边大于右边
var romanToInt = function (s) {
  // let result = 0;
  // let sArr = s.split('');
  // for (let i = 0, len = sArr.length; i < len; i++) {
  //   let cur = RomanHashMap[sArr[i]];
  //   let next = RomanHashMap[sArr[i + 1]];
  //   let val = cur;
  //   if (next && cur < next) {
  //     val = next - cur;
  //     i++;
  //   }
  //   result += val;
  // }
  // return result;
  /***********五毒神掌第二遍**********/
  // 五分钟读题，理解题意：
  // 原则上大的数字一定出现在左边，一旦左边出现比右边小的数字则要使用减法
  // 对照规则需要借助 hash 形成映射
  let rl = 0;
  for (let i = 0, len = s.length; i < len; ) {
    let cur = RomanHashMap[s[i]];
    let next = RomanHashMap[s[i + 1]];
    if (next && cur < next) {
      rl += next - cur;
      i = i + 2;
    } else {
      rl += cur;
      i = i + 1;
    }
  }
  return rl;
};
// @lc code=end
