// 迭代
const removeElements = (head, val) => {
  const dummyHead = new  ListNode(0, head);
  let temp = dummyHead;

  while (temp.next !== null) {
    if (temp.next.val === val) {
      temp.next = temp.next.next;
    } else {
      temp = temp.next;
    }
  }

  return dummyHead.next;
}