/**
 * 双指针
 */
const removeNthFromEnd = (head, n) => {
  const dummyHead = new ListNode(null);
  dummyHead.next = head;

  let first = dummyHead;
  let second = dummyHead;
  for (let i = 0; i < n + 1; i++) {
    first = first.next;
  }

  while(first) {
    first = first.next;
    second = second.next;
  }

  second.next = second.next.next;
  return dummyHead.next;
}