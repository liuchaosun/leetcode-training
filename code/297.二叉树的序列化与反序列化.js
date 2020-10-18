/*
 * @lc app=leetcode.cn id=297 lang=javascript
 *
 * [297] 二叉树的序列化与反序列化
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
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function (root) {
  // DFS 深度优先 先序遍历
  const rec = function (node, str) {
    if (!node) {
      str += 'None,';
    } else {
      str += node.val + ',';
      str = rec(node.left, str);
      str = rec(node.right, str);
    }
    return str;
  };
  return rec(root, '');
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
  let nodeArray = data.split(',');

  const rec = function (arr) {
    let fnode = arr.shift();
    if (fnode === 'None') {
      return null;
    }
    let node = {
      val: fnode,
      left: null,
      right: null,
    };
    node.left = rec(arr);
    node.right = rec(arr);
    return node;
  };
  return rec(nodeArray);
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
// @lc code=end
