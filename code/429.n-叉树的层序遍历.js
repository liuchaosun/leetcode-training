/*
 * @lc app=leetcode.cn id=429 lang=javascript
 *
 * [429] N叉树的层序遍历
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  let res = [];
  if (!root) {
    return res;
  }
  let tt = 0;
  let stack = [root];
  while (tt < stack.length) {
    let len = stack.length;
    let level = [];
    for (let i = tt; i < len; i++) {
      let cur = stack[i];
      if (cur.children && cur.children.length > 0) {
        for (let j = 0; j < cur.children.length; j++) {
          stack.push(cur.children[j]);
        }
      }
      level.push(cur.val);
    }
    tt = len;
    res.push(level);
  }
  return res;
};
// @lc code=end
