/**
 * 时间复杂度：O(n)
 * 空间复杂度：O(n)
 */
const removeNthFromEnd = (head, n) => {
  const dummyHead = new ListNode(-1);
  dummyHead.next = head;
  let currentHead = dummyHead.next;
  let len = 0;
  while (currentHead) {
    len++;
    currentHead = currentHead.next;
  }

  currentHead = dummyHead;
  let index = len - n;
  while (index) {
    index--;
    currentHead = currentHead.next;
  }

  currentHead.next = currentHead.next.next;

  return dummyHead.next;
}