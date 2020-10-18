/*
 * @Author: liuchaosun
 * @Date: 2020-10-10 11:49:24
 * @Last Modified by: liuchaosun
 * @Last Modified time: 2020-10-12 13:49:41
 */
/*
 * @lc app=leetcode.cn id=107 lang=javascript
 *
 * [107] 二叉树的层次遍历 II
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
var levelOrderBottom = function (root) {
  // 解法--BFS 变种
  // 与 102 题几乎相同的题目,区别在于本题最终使用队列方式存储
  // let resultQueue = [];
  // if (!root) {
  //   return resultQueue;
  // }
  // let queue = [root];
  // while (queue.length) {
  //   let level = [];
  //   for (let i = 0, n = queue.length; i < n; i++) {
  //     let node = queue.pop();
  //     level.push(node.val);
  //     if (node.left) {
  //       queue.unshift(node.left);
  //     }
  //     if (node.right) {
  //       queue.unshift(node.right);
  //     }
  //   }
  //   // 队尾入队
  //   resultQueue.unshift(level);
  // }

  // return resultQueue;

  // 第二遍
  // if (!root) {
  //   return [];
  // }
  // let result = [];
  // let queue = [root];
  // while (queue.length) {
  //   let level = [];
  //   for (let i = 0, n = queue.length; i < n; i++) {
  //     let node = queue.pop();
  //     level.push(node.val);
  //     if (node.left) {
  //       queue.unshift(node.left);
  //     }
  //     if (node.right) {
  //       queue.unshift(node.right);
  //     }
  //   }
  //   // 末尾插入最后在输出的时候进行反转，降低操作的损耗
  //   result.push(level);
  // }
  // return result.reverse();

  // 第三遍
  let ans = [];
  if (!root) {
    return ans;
  }
  let queue = [root];
  while (queue.length) {
    let level = [];
    // 添加一个临时数组，用 push 代替 unshift 降低损耗
    // 最后将 tmp 调转顺序，实现“队列”
    let tmp = [];
    for (let i = 0, n = queue.length; i < n; i++) {
      let node = queue.pop();
      level.push(node.val);
      if (node.left) {
        tmp.push(node.left);
      }
      if (node.right) {
        tmp.push(node.right);
      }
    }
    queue = tmp.reverse();
    // 末尾插入最后在输出的时候进行反转，降低操作的损耗
    ans.push(level);
  }
  return ans.reverse();
};
// @lc code=end
