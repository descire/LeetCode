/**
 * 迭代
 * 
 * 时间复杂度：O(n)
 * 空间复杂度：O(n)
 */
const removeElements = (head, val) => {
  const dummyHead = new ListNode(-1, head);
  let current = dummyHead;

  while (current.next) {
    if (current.next.val === val) {
      current.next = current.next.next;
    } else {
      current = current.next;
    }
  }

  return dummyHead.next;
}