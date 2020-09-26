/*
 * @lc app=leetcode.cn id=111 lang=javascript
 *
 * [111] 二叉树的最小深度
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function (root) {
  // ！！！！这题很坑题目，理解错了很久做不出来
  // 当存在叶子节点时，深度需要计算到叶子节点，不能计算没有叶子节点的
  if (!root) {
    return 0;
  }
  if (!root.left && !root.right) {
    return 1;
  }
  // 如果有一个子节点不存在，取另一边的
  if (!root.left || !root.right) {
    return Math.max(minDepth(root.left), minDepth(root.right)) + 1;
  }
  // 左右子节点都有，取最小值
  return Math.min(minDepth(root.left), minDepth(root.right)) + 1;
};
// @lc code=end
