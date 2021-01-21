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
  let hash = {};
  let keys = [];
  function rec(node) {
    if (!node) {
      return;
    }
    rec(node.left);
    let val = node.val;
    if (hash[val] !== void 0) {
      hash[val]++;
    } else {
      hash[val] = 1;
      keys.push(val);
    }
    rec(node.right);
  }
  rec(root);

  let ans = [];
  let max = 0;
  for (let index = 0; index < keys.length; index++) {
    const k = keys[index];
    if (hash[k] > max) {
      max = hash[k];
    }
  }
  for (let index = 0; index < keys.length; index++) {
    const k = keys[index];
    if (hash[k] === max) {
      ans.push(k);
    }
  }

  return ans;
};
// @lc code=end
