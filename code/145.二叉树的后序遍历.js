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
  // let ans = [];

  // function rec(node) {
  //   // 递归终止
  //   if (node === null) {
  //     return;
  //   }

  //   // 左遍历
  //   if (node.left) {
  //     rec(node.left);
  //   }

  //   // 右遍历
  //   if (node.right) {
  //     rec(node.right);
  //   }

  //   ans.push(node.val);
  // }

  // rec(root);

  // return ans;

  // 迭代法
  let ans = [];
  if (!root) {
    return ans;
  }

  let prev = null;
  let stack = [];
  while (root || stack.length) {
    while (root) {
      stack.push(root);
      root = root.left;
    }
    root = stack.pop();

    // root.right === prev  防止处理过的右节点重复进栈
    // if (root.right === null || root.right === prev) {
    //   ans.push(root.val);
    //   prev = root;
    //   root = null;
    // } else {
    //   // 存在右节点根节点需要重新入栈;
    //   stack.push(root);
    root = root.right;
    // }
  }

  return ans;
};
// @lc code=end
