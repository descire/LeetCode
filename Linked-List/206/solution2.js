/**
 * 递归
 * 
 * 时间复杂度：O(n)
 * 空间复杂度：O(n)
 * 
 */
const reverseList = head => {
  if (!head || !head.next) {
    return head;
  }

  const newHead = reverseList(head.next);
  head.next.next = head;
  head.next = null;
  return newHead;
}