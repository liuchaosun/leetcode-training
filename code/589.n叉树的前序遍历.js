/*
 * @lc app=leetcode.cn id=589 lang=javascript
 *
 * [589] N叉树的前序遍历
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[]}
 */
var preorder = function (root) {
  // 二叉树前序遍历
  // 1 处理数据
  // 2 rec(node.left)
  // 3 rec(node.right)
  let ans = [];
  function rec(node) {
    if (node === null) {
      return;
    }
    ans.push(node.val);
    if (!node.children || node.children.length === 0) {
      return;
    }
    for (let i = 0; i < node.children.length; i++) {
      rec(node.children[i]);
    }
  }
  rec(root);
  return ans;
};
// @lc code=end
