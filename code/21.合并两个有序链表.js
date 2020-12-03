/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
  // 链表的解法 最适合的就是递归
  // if (l1 === null) {
  //     return l2;
  // } else if (l2 === null) {
  //     return l1;
  // } else if (l1.val < l2.val) {
  //     l1.next = mergeTwoLists(l1.next, l2);
  //     return l1;
  // } else {
  //     l2.next = mergeTwoLists(l1, l2.next);
  //     return l2;
  // }

  // 用来记录链表的头节点
  // const prehead = new ListNode(-1);

  // let prev = prehead;
  // while (l1 != null && l2 != null) {
  //   if (l1.val <= l2.val) {
  //     prev.next = l1;
  //     l1 = l1.next;
  //   } else {
  //     prev.next = l2;
  //     l2 = l2.next;
  //   }
  //   prev = prev.next;
  // }

  // // 合并后 l1 和 l2 最多只有一个还未被合并完，我们直接将链表末尾指向未合并完的链表即可
  // prev.next = l1 === null ? l2 : l1;

  // return prehead.next;

  // 两个列表只能有一个是空的，当一个为空的时候返回另一个
  // if (l1 === null) {
  //   return l2;
  // } else if (l2 === null) {
  //   return l1;
  // } else if (l1.val <= l2.val) {
  //   l1.next = mergeTwoLists(l1.next, l2);
  //   return l1;
  // } else {
  //   l2.next = mergeTwoLists(l1, l2.next);
  //   return l2;
  // }

  // 用循环代替递归  需要返回头指针
  let header = new ListNode(-1);

  // 游走指针 prev
  let prev = header;
  while (l1 !== null && l2 !== null) {
    // 找出小的数据
    if (l1.val <= l2.val) {
      prev.next = l1;
      l1 = l1.next;
    } else {
      prev.next = l2;
      l2 = l2.next;
    }
    // 指针向后走
    prev = prev.next;
  }

  // 其中一个指针走完,剩下的指针全部拼接上
  prev.next = l1 !== null ? l1 : l2;

  return header.next;
};
// @lc code=end
