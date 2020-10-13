/**
 * 递归解法
 */
const swapPairs = function(head) {
  if (head === null || head.next === null) {
    return head;
  }
  const next = head.next;
  head.next = swapPairs(next.next);
  next.next = head;
  return next;
};