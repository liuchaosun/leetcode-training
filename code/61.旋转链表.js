/*
 * @lc app=leetcode.cn id=61 lang=javascript
 *
 * [61] 旋转链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
  if (!head) {
    return head;
  }
  // 首先想的是需要知道链表的长度，然后分别记录首尾两个结点
  let lll = 1;
  let last = null;
  let move = head;
  while (move && move.next) {
    lll++;
    move = move.next;
  }
  // 如果k等于链表长度，不需要操作就可以直接返回
  if (k !== lll) {
    // 到这里 move 是尾结点，赋值给 last
    last = move;
    // 第一阶段结束，目前拿到了首尾结点和链表长度
    // 第二阶段，计算k与链表长度之间的余数，决定从第几个结点断开
    let target = lll - (k % lll);
    let num = 1;
    // 回到开头
    move = head;
    while (num < target) {
      num++;
      move = move.next;
    }
    // 1 尾结点接到头结点
    last.next = head;
    // 2 move的下一个结点成为头结点
    head = move.next;
    // 3 断开链表
    move.next = null;
  }

  return head;
};
// @lc code=end
