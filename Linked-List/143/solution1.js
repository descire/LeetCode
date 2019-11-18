/**
 * https://leetcode-cn.com/problems/reorder-list/
 * 
 * 143. 重排链表
 * 
 * Medium
 * 
 * 92ms 97.62%
 * 
 * 40.7mb 83.33%
 */
const reorderList = head => {
  if (!head || !head.next) {
    return head;
  }

  // 寻找列表的中间值
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
  }

  // 翻转后半段
  const secondHalf = slow.next;
  slow.next = null;

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
/**
 * 1 -> 2 -> 3 -> 4 -> 5
 * 一、
 * head: 1
 * nextNode: 2 -> 3 -> 4 -> 5
 * 
 * 二、
 * head: 2 -> 1
 * nextNode: 3 -> 4 -> 5
 */
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