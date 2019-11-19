/**
 * https://leetcode-cn.com/problems/add-two-numbers-ii/
 * 
 * 445. 两数相加 II
 * 
 * Medium
 * 
 * 140ms 66.67%
 * 38.6mb 81.25%
 */
const addTwoNumbers = (l1, l2) => {
  let c1 = reverseLinkedList(l1);
  let c2 = reverseLinkedList(l2);

  let current1 = c1;
  let current2 = c2;
  let isOne = true;
  let count = 0;
  while (current1 || current2) {

    const total = (current1 ? current1.val : 0) + (current2 ? current2.val : 0) + count;
    current1 && (current1.val = total % 10);
    current2 && (current2.val = total % 10);
    count = Math.floor(total / 10);
    // 记录哪一个最长
    if (!current1 && current2) {
      isOne = false;
    }
    current1 && (current1 = current1.next);
    current2 && (current2 = current2.next);
  }

  let ans = new ListNode(count); // 边缘情况处理
  if (!isOne) {
    ans.next = reverseLinkedList(c2);
  } else {
    ans.next = reverseLinkedList(c1);
  }
  if (count) {
    return ans;
  }
  return ans.next;
}

function reverseLinkedList(head) {
  if (!head || !head.next) {
    return head;
  }

  let nextHead = head.next;
  head.next = null;
  while (nextHead) {
    const tempNext = nextHead.next;
    nextHead.next = head;
    head = nextHead;
    nextHead = tempNext;
  }
  return head;
}