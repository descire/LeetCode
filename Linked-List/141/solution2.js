/**
 * 时间复杂度：O(n)
 * 空间复杂度：O(1)
 */
const hasCycle = head => {

  if (!head || !head.next) {
    return false;
  }

  let slow = head;
  let fast = head.next;

  while (slow !== fast) {
    if (!fast || !fast.next) {
      // 到达终点
      return false;
    }

    slow = slow.next;
    fast = fast.next.next;
  }

  return true;
}