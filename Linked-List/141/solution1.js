/**
 * https://leetcode-cn.com/problems/linked-list-cycle/
 * 
 * 141. 环形链表
 * 
 * Easy
 * 
 * 88ms 27.14%
 * 38.2mb 5.05%
 */
const hasCycle = head => {
  const record = new Set();
  while (head) {
    if (record.has(head)) {
      return true;
    }
    record.add(head)
    head = head.next;
  }
  return false;
}