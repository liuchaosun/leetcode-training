/*
 * @lc app=leetcode.cn id=49 lang=javascript
 *
 * [49] 字母异位词分组
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var strSort = function (str) {
  return str
    .split('')
    .sort((a, b) => a.charCodeAt() - b.charCodeAt())
    .join('');
};

var groupAnagrams = function (strs) {
  // 暴力法--空间复杂度O(n) 时间复杂度 O(n*nlogn)
  // 遍历数组，对数组中的所有数据进行排序，然后找出相等的
  let strsCopy = strs.slice();
  for (let i = 0; i < strsCopy.length; i++) {
    strsCopy[i] = strSort(strsCopy[i]);
  }
  let ans = [];
  for (let slow = 0; slow < strsCopy.length; slow++) {
    if (strsCopy[slow] === 0) {
      continue;
    }
    let arr = [strs[slow]];
    for (let fast = slow + 1; fast < strsCopy.length; fast++) {
      if (strsCopy[slow] === strsCopy[fast]) {
        arr.push(strs[fast]);
        //取过的值设置为0
        strsCopy[fast] = 0;
      }
    }
    ans.push(arr);
  }
  return ans;
};
// @lc code=end
