/*
 * @lc app=leetcode.cn id=107 lang=javascript
 *
 * [107] 二叉树的层次遍历 II
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
 * @return {number[][]}
 */
var levelOrderBottom = function (root) {
  let res = [];
  let nodes = [root];
  while (nodes.length) {
    let len = nodes.length;
    let tmp = [];
    for (let index = 0; index < len; index++) {
      const element = array[index];
    }
  }

  return res;
};
// @lc code=end
