/**
 * 迭代解决
 */
const swapPairs = function(head) {
  const pre = new ListNode(0);
  pre.next = head;
  let temp = pre;

  while (temp.next !== null && temp.next.next !== null) {
    const x = temp.next;
    const y = temp.next.next;

    temp.next = y;
    x.next = y.next;
    y.next = x;

    temp = x;
  }

  return pre.next;
};