/*
 * @lc app=leetcode.cn id=101 lang=javascript
 *
 * [101] 对称二叉树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {
  if (!root) {
    return true;
  }
  function dfs(left, right) {
    // 递归终止
    // 1 都为空
    if (left === null && right === null) {
      return true;
    }
    // 2 其中一个为空
    if (left === null || right === null) {
      return false;
    }
    if (left.val === right.val) {
      return dfs(left.left, right.right) && dfs(left.right, right.left);
    }
    return false;
  }
  return dfs(root.left, root.right);
};
// @lc code=end
