const reorderList = head => {
  if (!head || !head.next) {
    return head;
  }
  
  const half = findHalf(head);
  const secondHalf = half.next;
  half.next = null;

  let newSecondHalf = reverseLinkedList(secondHalf);

  // 合并
  let currentHead = head;
  while (currentHead && newSecondHalf) {
    const x = currentHead.next;
    const y = newSecondHalf.next;
    currentHead.next = newSecondHalf;
    newSecondHalf.next = x;
    currentHead = x;
    newSecondHalf = y;
  }
}

// 寻找链表中间值
function findHalf(head) {
  let fast = head;
  let slow = head;
  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
  }
  
  return slow;
}

// 翻转链表
function reverseLinkedList(head) {
  if (!head || !head.next) {
    return head;
  }

  let nextNode = head.next;
  head.next = null;
  while (nextNode) {
    const temp = nextNode.next;
    nextNode.next = head;
    head = nextNode;
    nextNode = temp;
  }

  return head;
}