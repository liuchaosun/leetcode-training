/*
 * @lc app=leetcode.cn id=455 lang=javascript
 *
 * [455] 分发饼干
 */

// @lc code=start
/**
 *  贪心算法
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function (g, s) {
  // * 第一遍
  // 将两个数组都进行排序然后遍历
  g.sort((a, b) => a - b);
  s.sort((a, b) => a - b);

  let i = 0;
  let j = 0;
  let ans = 0;
  while (i < g.length && j < s.length) {
    if (g[i] <= s[j]) {
      // 饼干的尺寸大于小孩的胃口
      ans++;
      i++;
      j++;
    } else {
      j++;
    }
  }

  return ans;
};
// @lc code=end
