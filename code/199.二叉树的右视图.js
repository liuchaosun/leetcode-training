/*
 * @lc app=leetcode.cn id=199 lang=javascript
 *
 * [199] 二叉树的右视图
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
 * @return {number[]}
 */
var rightSideView = function (root) {
  // 第一遍， BFS 变种
  if (!root) {
    return [];
  }
  let result = [];
  let queue = [root];
  while (queue.length) {
    result.push(queue[0].val);
    for (let i = 0, n = queue.length; i < n; i++) {
      let node = queue.pop();
      if (node.left) {
        queue.unshift(node.left);
      }
      if (node.right) {
        queue.unshift(node.right);
      }
    }
  }
  return result;
};
// @lc code=end
