/**
 * 328. 奇偶链表
 * 
 * https://leetcode-cn.com/problems/odd-even-linked-list/
 * 
 * Medium
 * 
 * odd 1 2 3 4 5 6 7
 * even 2 3 4 5 6 7
 * 
 * 80ms 75.16%
 * 36.1mb 65.31%
 * 
 */
const oddEvenList = head => {
  if (!head || !head.next) {
    return head;
  }

  let odd = head;
  let even = head.next;
  let temp = even;

  while (even && even.next) {
    odd.next = even.next;
    odd = odd.next;
    even.next = odd.next;
    even = even.next;
  }

  odd.next = temp;
  return head;
}