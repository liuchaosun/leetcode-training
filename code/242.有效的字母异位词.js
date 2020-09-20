/*
 * @lc app=leetcode.cn id=242 lang=javascript
 *
 * [242] 有效的字母异位词
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

let sortString = function (str) {
  return str
    .split('')
    .sort((a, b) => a.charCodeAt() - b.charCodeAt())
    .join('');
};

// 切题四件套
// 1. 确定题意-->是否大小写模糊
// 2. 想出可能的解法-->从中选择
// 3. codeing
// 4. test

var isAnagram = function (s, t) {
  // 可能的解法:
  // 1. 两个字符串都排序一次，然后判断是否相等
  // 2. hash 表记录字母出现的次数
  // 3. 数组记录字母的次数

  // 1
  // if (typeof s !== 'string' || typeof t !== 'string') {
  //   return false;
  // }
  // if (s === t) {
  //   return true;
  // }
  // if (sortString(s) !== sortString(t)) {
  //   return false;
  // }
  // return true;

  // 2
  // if (typeof s !== 'string' || typeof t !== 'string') return false;
  // if (s.length !== t.length) return false;
  // if (s === t) return true;

  // let HashMap = Object.create(null);
  // for (let i of s) {
  //   if (HashMap[i] !== undefined) {
  //     HashMap[i]++;
  //   } else {
  //     HashMap[i] = 1;
  //   }
  // }

  // for (let i of t) {
  //   if (!HashMap[i]) {
  //     return false;
  //   } else {
  //     HashMap[i]--;
  //   }
  // }

  // return true;

  // 3
  if (typeof s !== 'string' || typeof t !== 'string') return false;
  if (s.length !== t.length) return false;
  if (s === t) return true;
  // ASCII 的值是0到255，最大256 用数组比较好 -- 可以优化成长度为 26 的数组
  let ASCIIArray = [];
  for (let i = 0, len = s.length; i < len; i++) {
    let charcode = s[i].charCodeAt();
    if (ASCIIArray[charcode] !== undefined) {
      ASCIIArray[charcode]++;
    } else {
      ASCIIArray[charcode] = 1;
    }
  }
  for (let i = 0, len = t.length; i < len; i++) {
    let charcode = t[i].charCodeAt();
    if (!ASCIIArray[charcode]) {
      return false;
    } else {
      ASCIIArray[charcode]--;
    }
  }
  return true;
};
// @lc code=end

// 测试用例
// 1. 不是数字
// 2. " " and " "
// 3. "" and ""
// 4. "a" and "ab"
