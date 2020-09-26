/*
 * @lc app=leetcode.cn id=22 lang=javascript
 *
 * [22] 括号生成
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */

var generateParenthesis = function (n) {
  // 第一遍
  let ans = [];
  const _generate = function (left, right, s) {
    //  终止条件--左右括号个数都用完
    if (left === n && right === n) {
      ans.push(s);
      return;
    }
    // 当前层逻辑
    // 进入下一层
    // 可以放左括号的前提是没有用完
    if (left < n) {
      _generate(left + 1, right, s + '(');
    }
    // 可以放右括号的前提是左括号比右括号多
    if (left > right) {
      _generate(left, right + 1, s + ')');
    }
    // 处理参数
  };
  _generate(0, 0, '');
  return ans;
};
// @lc code=end
