/**
 * https://leetcode-cn.com/problems/reverse-linked-list-ii/
 * 
 * 92. 反转链表 II
 * 
 * Medium
 * 
 * O(n)
 * 
 * 64ms 72.54%
 * 34,2mb 5.76%
 */
const reverseBetween = (head, m, n) => {
  // m = 1 时，头节点的问题
  const newHead = new ListNode(-1);
  newHead.next = head;

  let preHead = newHead;
  for (let i = 0; i< m - 1; i++) {
    preHead = preHead.next;
  }

  let currentHead = preHead.next;
  for (let i = m; i < n; i++) {
    const nextHead = currentHead.next;
    currentHead.next = nextHead.next;
    nextHead.next = preHead.next;
    preHead.next = nextHead;
  }
  return newHead.next;
}