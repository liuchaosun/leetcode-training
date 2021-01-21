/*
 * @lc app=leetcode.cn id=590 lang=javascript
 *
 * [590] N叉树的后序遍历
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
 * @return {number[]}
 */
var postorder = function (root) {
  let res = [];

  function rec(node) {
    if (!node) {
      return;
    }
    if (!node.children || node.children.length === 0) {
      res.push(node.val);
      return;
    } else {
      for (let i = 0; i < node.children.length; i++) {
        const cur = node.children[i];
        rec(cur);
      }
      res.push(node.val);
    }
  }

  rec(root);

  return res;
};
// @lc code=end
