/**
 * 时间复杂度：O(max(n, m))
 * 空间复杂度：O(1)
 */
const addTwoNumbers = (l1, l2) => {
  const ans = new ListNode(null);

  let currentHead = ans;
  let carry = 0;

  l1 = reverseLinkedList(l1);
  l2 = reverseLinkedList(l2);

  while (l1 || l2) {
    const x = (l1 && l1.val) || 0;
    const y = (l2 && l2.val) || 0;

    const sum = x + y + carry;
    if (sum >= 10) {
      carry = 1;
    } else {
      carry = 0;
    }

    currentHead.next = new ListNode(sum % 10);
    currentHead = currentHead.next;

    l1 && (l1 = l1.next);
    l2 && (l2 = l2.next);
  }

  if (carry > 0) {
    currentHead.next = new ListNode(carry);
  }

  return reverseLinkedList(ans.next);

}

function reverseLinkedList(head) {
  if (!head || !head.next) {
    return head;
  }

  let nextHead = head.next;
  head.next = null;

  while (nextHead) {
    const temp = nextHead.next;
    nextHead.next = head;
    head = nextHead;
    nextHead = temp;
  }

  return head;
}