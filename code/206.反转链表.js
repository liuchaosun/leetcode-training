/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  // 第一遍
  // A: 使用迭代，从前往后遍历
  // let prev = null;
  // while (head) {
  //   let tmp = head.next; // 1. 临时变量，存储下一个节点
  //   head.next = prev; // 2. 当前节点的指针指向前节点
  //   prev = head; // 3. 前节点向后移动
  //   head = tmp; // 4. 头指针向后移动
  // }
  // return prev;
  // B: 尾递归
  // 和迭代的方法类似
  let reverse = function (prev, curr) {
    if (!curr) {
      return prev;
    }
    let tmp = curr.next;
    curr.next = prev;
    return reverse(curr, tmp);
  };
  return reverse(null, head);
};

// @lc code=end
