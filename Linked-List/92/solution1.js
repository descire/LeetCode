/**
 * 时间复杂度：O(n)
 * 空间复杂度：O(1)
 */
const reverseBetween = (head, m, n) => {
  const dummyHead = new ListNode(null);
  dummyHead.next = head;

  let preHead = dummyHead;

  for (let i = 0; i < m - 1; i++) {
    preHead = preHead.next;
  }

  let rightHead = preHead;
  for (let i = 0; i < n - m + 1; i++) {
    rightHead = rightHead.next;
  }

  let leftHead = preHead.next;
  let sufHead = rightHead.next;

  preHead.next = null;
  rightHead.next = null;
  
  reverseLinkedList(leftHead);

  preHead.next = rightHead;
  leftHead.next = sufHead;

  return dummyHead.next;
}

function reverseLinkedList(head) {
  let pre = null;
  let current = head;

  while (current) {
    const next = current.next;
    current.next = pre;
    pre = current;
    current = next;
  }
}