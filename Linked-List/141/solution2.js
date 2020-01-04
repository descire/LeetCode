/**
 * https://leetcode-cn.com/problems/linked-list-cycle/
 * 
 * 141. 环形链表
 * 
 * Easy
 * 
 * 68ms 96.93%
 * 37mb 24.04%
 */
const hasCycle = head => {
  if (!head || !head.next) {
    return false;
  }
  let slowHead = head;
  let fastHead = head.next;

  while (slowHead !== fastHead) {
    if (!fastHead || !fastHead.next) {
      return false;
    }
    slowHead = slowHead.next;
    fastHead = fastHead.next.next;
  }

  return true;
}