/*
 * @lc app=leetcode.cn id=98 lang=javascript
 *
 * [98] 验证二叉搜索树
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
 * @return {boolean}
 */
var isValidBST = function (root) {
  // 二叉搜索树（BST）的基本规则是
  // 左子树的所有节点的值都要小于根节点,子树同理
  // 右子树的所有节点的值都要大于根节点,子树同理

  // 递归
  // 本题的逻辑改为 节点的值在两个边界之间为真
  // const valid = function (node, min, max) {
  //   if (node === null) {
  //     return true;
  //   }
  //   // 小于小边界或者大于大边界都为假
  //   if (node.val <= min || node.val >= max) {
  //     return false;
  //   }
  //   // 左子树的上边界是根节点，右子树的下边界是根节点
  //   return valid(node.left, min, node.val) && valid(node.right, node.val, max);
  // };
  // return valid(root, -Infinity, Infinity);

  // 中序遍历 左 根 右
  // 二叉搜索树的中序遍历是升序的
  let stack = [];
  let small = -Infinity;
  while (stack.length || root) {
    // 保存根节点然后找左子节点
    while (root) {
      stack.push(root);
      root = root.left;
    }
    // 左子节点为空时，取出根
    root = stack.pop();
    // 判断根节点的值是否满足
    if (root.val <= small) {
      return false;
    }
    small = root.val;
    // 查看当前节点的右节点
    root = root.right;
  }
  return true;
};
// @lc code=end
