/*
 * @lc app=leetcode.cn id=94 lang=javascript
 *
 * [94] 二叉树的中序遍历
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
 * 二叉树的中序遍历，也叫顺序遍历
 * 1. 找左
 * 2. 找根
 * 3. 找右
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function (root) {
  let ans = [];
  let stack = [];
  if (!root) {
    return ans;
  }
  while (stack.length || root) {
    // 1. 一直下探，找左子节点
    while (root) {
      stack.push(root);
      root = root.left;
    }
    // 2. 没有左子节点则返回根节点
    root = stack.pop();
    ans.push(root.val);
    // 3. 再找右节点
    root = root.right;
  }
  return ans;
};
// @lc code=end
