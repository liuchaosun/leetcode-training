/*
 * @lc app=leetcode.cn id=637 lang=javascript
 *
 * [637] 二叉树的层平均值
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
var averageOfLevels = function (root) {
  // 第一遍 BFS
  if (!root) {
    return [];
  }

  let ans = [];
  let queue = [root];
  while (queue.length) {
    let total = 0;
    let n = queue.length;
    for (let index = 0; index < n; index++) {
      let node = queue.pop();
      total += node.val;
      if (node.left) {
        queue.unshift(node.left);
      }
      if (node.right) {
        queue.unshift(node.right);
      }
    }
    ans.push(total / n);
  }
  return ans;
};
// @lc code=end
