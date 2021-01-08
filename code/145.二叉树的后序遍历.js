/*
 * @lc app=leetcode.cn id=145 lang=javascript
 *
 * [145] 二叉树的后序遍历
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
 * @return {number[]}
 */
var postorderTraversal = function (root) {
  let ans = [];

  function rec(node) {
    // 递归终止
    if (node === null) {
      return;
    }

    // 左遍历
    if (node.left) {
      rec(node.left);
    }

    // 右遍历
    if (node.right) {
      rec(node.right);
    }

    ans.push(node.val);
  }

  rec(root);

  return ans;
};
// @lc code=end
