/*
 * @lc app=leetcode.cn id=998 lang=javascript
 *
 * [998] 最大二叉树 II
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
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoMaxTree = function (root, val) {
  let newNode = new TreeNode(val);
  if (root === null) {
    return newNode;
  }

  if (root.val < val) {
    newNode.left = root;
    return newNode;
  }

  // 因为新的值放在数组最后，所以一旦遇到小值就可以停下了
  let prevNode = root;
  while (prevNode.right !== null && prevNode.right.val > val) {
    prevNode = prevNode.right;
  }

  newNode.left = prevNode.right;
  prevNode.right = newNode;
  return root;
};
// @lc code=end
