/*
 * @lc app=leetcode.cn id=230 lang=javascript
 *
 * [230] 二叉搜索树中第K小的元素
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
 * 使用中序遍历，从二叉搜索树的最小值开始找
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (root, k) {
  // let stack = [];
  // while (stack.length || root) {
  //   while (root) {
  //     stack.push(root);
  //     root = root.left;
  //   }
  //   root = stack.pop();
  //   if (--k === 0) {
  //     break;
  //   }
  //   root = root.right;
  // }
  // return root.val;

  // 第K个最小的元素， 中序遍历
  // let res = [];

  // function rec(node) {
  //   if (!node) {
  //     return;
  //   }
  //   rec(node.left);
  //   res.push(node.val);
  //   rec(node.right);
  // }

  // rec(root);

  // return res[k - 1];

  // 优化  找到第 K 个后结束
  // let num = 0;

  // function rec(node) {
  //   if (!node) {
  //     return;
  //   }
  //   rec(node.left);
  //   if (num !== 0) {
  //     return;
  //   }
  //   if (--k === 0) {
  //     num = node.val;
  //     return;
  //   }

  //   rec(node.right);
  // }

  // rec(root);

  // return num;

  // 优化 ++ 使用迭代代替递归
  let stack = [];
  while (root || stack.length) {
    while (root) {
      stack.push(root);
      root = root.left;
    }
    root = stack.pop();
    if (--k === 0) {
      return root.val;
    }
    root = root.right;
  }
};
// @lc code=end
