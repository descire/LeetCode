/**
 * https://leetcode-cn.com/problems/rotate-list/
 * 
 * 61. 旋转链表
 * 
 * Medium
 * 
 * 68ms 95.08%
 * 35.8mb 10.71%
 */
const rotateRight = (head, k) => {
  if (!head || k === 0) {
    return head;
  }
  // 获取链表的长度 并且记录链表最后一个元素
  let size = 0;
  let lastHead = head;
  while (lastHead && lastHead.next) {
    size++;
    lastHead = lastHead.next;
  }

  size++;

  const index = k % size;
  if (index === 0) {
    return head;
  }
  const dummyHead = new ListNode(-1);
  dummyHead.next = head;
  let x = size - index;
  let currentHead = dummyHead.next;
  while (--x) {
    currentHead = currentHead.next;
  }
  lastHead.next = dummyHead.next
  dummyHead.next = currentHead.next;
  currentHead.next = null;
  return dummyHead.next
}