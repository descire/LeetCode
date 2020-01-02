/**
 * https://leetcode-cn.com/problems/remove-nth-node-from-end-of-list/
 * 
 * 19. 删除链表的倒数第N个节点
 * 
 * Medium
 * 
 * 双指针解法
 * 
 * 56ms 98.71%
 * 34.5mb 5.18%
 */
const removeNthFromEnd = (head, n) => {
  const dummyHead = new ListNode(null);
  dummyHead.next = head;

  let first = dummyHead;
  let second = dummyHead;
  for (let i = 0; i < n + 1; i++) {
    first = first.next;
  }

  while(first) {
    first = first.next;
    second = second.next;
  }

  second.next = second.next.next;
  return dummyHead.next;
}