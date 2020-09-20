/*
 * @lc app=leetcode.cn id=24 lang=javascript
 *
 * [24] 两两交换链表中的节点
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
 * A: 第一个解法是递归
 * 递归是从最后开始修改指向，让倒数第三指向倒数第一 以此类推
 *
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
  // 最后一个节点
  if (head === null || head.next === null) {
    return head;
  }
  let next = head.next;
  // 当前节点的下个节点指向下下个节点
  head.next = swapPairs(head.next.next);
  next.next = head; //
  return next;
};

// @lc code=end
