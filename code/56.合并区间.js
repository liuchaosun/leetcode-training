/*
 * @lc app=leetcode.cn id=56 lang=javascript
 *
 * [56] 合并区间
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */

var merge = function (intervals) {
  let i = 0;
  let res = [];
  let len = intervals.length;
  if (len == 0) return [];
  intervals.sort((a, b) => a[0] - b[0]);
  while (i < len) {
    let currLeft = intervals[i][0];
    let currRight = intervals[i][1];
    while (i < len - 1 && currRight >= intervals[i + 1][0]) {
      i++;
      currRight = Math.max(currRight, intervals[i][1]);
    }
    res.push([currLeft, currRight]);
    i++;
  }
  return res;
};

// @lc code=end
