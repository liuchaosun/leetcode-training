/*
 * @lc app=leetcode.cn id=501 lang=javascript
 *
 * [501] 二叉搜索树中的众数
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
var findMode = function (root) {
  // 二叉搜索树 中序遍历
  let ans = [];
  let base;
  let count = 1;
  let maxCount = 0;
  function update(val) {
    if (base === val) {
      count++;
    } else {
      // 新的值 重置
      base = val;
      count = 1;
    }
    if (count > maxCount) {
      maxCount = count;
      ans = [base];
    } else if (count === maxCount) {
      ans.push(base);
    }
  }
  function rec(node) {
    if (!node) {
      return;
    }
    rec(node.left);
    update(node.val);
    rec(node.right);
  }
  rec(root);
  return ans;
};
// @lc code=end
