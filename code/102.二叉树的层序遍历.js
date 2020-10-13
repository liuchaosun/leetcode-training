/*
 * @Author: liuchaosun
 * @Date: 2020-10-10 11:10:40
 * @Last Modified by: liuchaosun
 * @Last Modified time: 2020-10-12 13:40:49
 */
/*
 * @lc app=leetcode.cn id=102 lang=javascript
 *
 * [102] 二叉树的层序遍历
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
var levelOrder = function (root) {
  // 层序遍历，使用 BFS
  // let result = [];
  // if (!root) {
  //   return result;
  // }
  // let queue = [root];
  // while (queue.length) {
  //   // 当前层
  //   let level = [];
  //   for (let i = 0, n = queue.length; i < n; i++) {
  //     // 队首取出
  //     let node = queue.pop();
  //     level.push(node.val);
  //     // 左节点先入队
  //     if (node.left) {
  //       queue.unshift(node.left);
  //     }
  //     if (node.right) {
  //       queue.unshift(node.right);
  //     }
  //   }
  //   result.push(level);
  // }
  // return result;

  // 第二遍
  let result = [];
  if (!root) {
    return result;
  }

  let queue = [root];
  while (queue.length) {
    let level = [];
    for (let i = 0, n = queue.length; i < n; i++) {
      let node = queue.pop();
      level.push(node.val);
      if (node.left) {
        queue.unshift(node.left);
      }
      if (node.right) {
        queue.unshift(node.right);
      }
    }
    result.push(level);
  }

  return result;
};
// @lc code=end
