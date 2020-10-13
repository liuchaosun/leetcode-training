/*
 * @lc app=leetcode.cn id=429 lang=javascript
 *
 * [429] N叉树的层序遍历
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  // 第一遍
  // 解法同102，BFS
  if (!root) {
    return [];
  }

  let ans = [];
  let queue = [root];
  while (queue.length) {
    let level = [];
    // 队列原则上是先进先出，但是用数组模拟队列时间损耗大
    // 采取相反的策略降低一些损耗
    for (let i = 0, n = queue.length; i < n; i++) {
      let node = queue.shift();
      level.push(node.val);
      // 将节点孩子加入队列
      for (let j = 0; j < node.children.length; j++) {
        if (node.children[j]) queue.push(node.children[j]);
      }
    }
    ans.push(level);
  }
  return ans;
};
// @lc code=end
