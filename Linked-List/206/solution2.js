/**
 * https://leetcode-cn.com/problems/reverse-linked-list/
 * 
 * 206. 反转链表
 * 
 * Easy
 * 
 * 1 -> 2 -> 3 -> 4 -> 5
 * 
 * 68ms 96.28%
 * 34.9mb 46.38%
 */
const reverseList = head => {
  let reverseHead = null;
  let currentHead = head;
  while (currentHead) {
    const nextTemp = currentHead.next;
    currentHead.next = reverseHead;
    reverseHead = currentHead;
    currentHead = nextTemp;
  }
  return reverseHead;
}