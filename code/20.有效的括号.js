/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 * 解题思路：遇到左括号进栈，右括号出栈，最后看栈底是否还有元素
 */
var isValid = function (s) {
  if (s.length % 2) return false;
  let bracketsMap = {
    '(': ')',
    '{': '}',
    '[': ']',
  };
  let bracketsStack = [];
  for (let i = 0, len = s.length; i < len; i++) {
    let tmp = s[i];
    if ('([{'.indexOf(tmp) > -1) {
      // 左括号存入
      bracketsStack.push(tmp);
    } else {
      // 右括号，取出栈顶
      let last = bracketsStack.pop();
      if (tmp !== bracketsMap[last]) {
        return false;
      }
    }
  }
  return bracketsStack.length === 0;
};
// @lc code=end
