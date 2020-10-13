/*
 * @lc app=leetcode.cn id=515 lang=javascript
 *
 * [515] 在每个树行中找最大值
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
var largestValues = function (root) {
  // 第一遍 层序遍历的又一变种
  if (!root) return [];
  let ans = [];
  let queue = [root];
  while (queue.length) {
    let max = queue[0].val;
    for (let i = 0, n = queue.length; i < n; i++) {
      let node = queue.shift();
      if (node.val > max) {
        max = node.val;
      }
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
    ans.push(max);
  }
  return ans;
};
// @lc code=end
