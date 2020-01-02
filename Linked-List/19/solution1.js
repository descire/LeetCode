/**
 * https://leetcode-cn.com/problems/remove-nth-node-from-end-of-list/
 * 
 * 19. 删除链表的倒数第N个节点
 * 
 * Medium
 * 
 * 72ms 51.37%
 * 34.4mb 7.92%
 */
const removeNthFromEnd = (head, n) => {
  const dummyHead = new ListNode(-1);
  dummyHead.next = head;
  // 记录链表的长度
  let currentHead = dummyHead.next;
  let totalCount = 0;
  while(currentHead) {
    totalCount++;
    currentHead = currentHead.next;
  }
  // 删除节点
  let index = totalCount - n + 1;
  let preHead = dummyHead;
  currentHead = dummyHead.next;
  while(index) {
    if (index === 1) {
      preHead.next = currentHead.next;
      break;
    }
    index--;
    preHead = currentHead;
    currentHead = currentHead.next;
  }
  return dummyHead.next;
}