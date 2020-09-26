/*
 * @lc app=leetcode.cn id=104 lang=javascript
 *
 * [104] 二叉树的最大深度
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
 * 树的深度由子树的深度加一得到
 * 子树的深度由子树的子树深度加一得到
 * 所以就是 递归求子树深度
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
  // 第一遍
  // DFS
  // 前序遍历 根 左 右
  // if (!root) {
  //   return 0;
  // }
  // let stack = [root];
  // let value = [1];
  // let max = 0;
  // while (stack.length) {
  //   root = stack.pop();
  //   let tmp = value.pop();
  //   if (tmp > max) {
  //     max = tmp;
  //   }
  //   if (root.right) {
  //     stack.push(root.right);
  //     value.push(tmp + 1);
  //   }
  //   if (root.left) {
  //     stack.push(root.left);
  //     value.push(tmp + 1);
  //   }
  // }
  // return max;

  // // 递归终结
  if (!root) {
    return 0;
  }
  // 当前层逻辑
  // 进入下一层
  let leftDep = maxDepth(root.left);
  let rightDep = maxDepth(root.right);
  // 结果带回
  return leftDep > rightDep ? ++leftDep : ++rightDep;
};
// @lc code=end
