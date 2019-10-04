/**
 * https://leetcode-cn.com/problems/reverse-linked-list/
 * 
 * 206. 反转链表
 * 
 * Easy
 * 
 * 迭代
 * 
 * 72ms 92.09%
 * 35.8mb 8.18%
 */
const reverseList = head => {
  const values = [];
  let currentHead = head;
  while (currentHead) {
    values.unshift(currentHead.val);
    currentHead = currentHead.next;
  }

  let reverseHead = head;
  let index = 0;
  let max = values.length;
  while (index < max) {
    reverseHead.val = values[index++];
    reverseHead = reverseHead.next;
  }

  return head;
}