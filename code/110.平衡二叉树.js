/*
 * @lc app=leetcode.cn id=110 lang=javascript
 *
 * [110] 平衡二叉树
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
 * @return {boolean}
 */
var isBalanced = function (root) {
  // // 自底向上的后序遍历
  // function height(node) {
  //   if (node === null) {
  //     return 0;
  //   }

  //   let leftHeight = height(node.left);
  //   if (leftHeight === -1) {
  //     return -1;
  //   }

  //   let rightHeight = height(node.right);
  //   if (rightHeight === -1) {
  //     return -1;
  //   }

  //   if (Math.abs(leftHeight - rightHeight) > 1) {
  //     return -1;
  //   }

  //   return Math.max(leftHeight, rightHeight) + 1;
  // }

  // return height(root) !== -1;

  // 涉及到高度，可以从叶子节点开始计算
  function calcHeight(node) {
    // 结束标志
    if (node === null) {
      return 0;
    }
    let left = calcHeight(node.left);
    if (left === -1) {
      return -1;
    }
    let right = calcHeight(node.right);
    if (right === -1) {
      return -1;
    }

    if (Math.abs(left - right) > 1) {
      return -1;
    }

    // 数据处理放在后面：后序遍历
    return Math.max(left, right) + 1;
  }

  // 非平衡二叉树，设其高度为 -1
  return calcHeight(root) !== -1;
};
// @lc code=end
