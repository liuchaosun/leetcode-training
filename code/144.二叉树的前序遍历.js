/*
 * @lc app=leetcode.cn id=144 lang=javascript
 *
 * [144] 二叉树的前序遍历
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
var preorderTraversal = function (root) {
  // let ans = [];

  // function rec(node) {
  //   // 递归终止
  //   if (node === null) {
  //     return;
  //   }
  //   ans.push(node.val);
  //   // 左遍历
  //   if (node.left) {
  //     rec(node.left);
  //   }
  //   // 右遍历
  //   if (node.right) {
  //     rec(node.right);
  //   }
  // }

  // rec(root);

  // return ans;

  // 迭代法
  let ans = [];
  if (!root) {
    return ans;
  }

  let stack = [];
  while (root || stack.length) {
    while (root) {
      ans.push(root.val);
      stack.push(root);
      root = root.left;
    }
    root = stack.pop();
    root = root.right;
  }

  return ans;
};
// @lc code=end
