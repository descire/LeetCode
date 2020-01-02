/**
 * https://leetcode-cn.com/problems/remove-nth-node-from-end-of-list/
 * 
 * 19. 删除链表的倒数第N个节点
 * 
 * Medium
 * 
 * 60ms 94.99%
 * 33.9mb 51.22%
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
  // 删除节点（题目中确保了n有效，所以不需要做健壮性处理）
  let index = totalCount - n;
  let prevHead = dummyHead;
  while(index--) {
    prevHead = prevHead.next;
  }
  prevHead.next = prevHead.next.next;
  return dummyHead.next;
}