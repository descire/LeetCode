/**
 * https://leetcode-cn.com/problems/middle-of-the-linked-list/
 * 
 * 876. 链表的中间结点
 * 
 * Easy
 * 
 * 60ms 92.99%
 * 33.6mb 63.49%
 * 
 * 快慢指针
 */
const middleNode = head => {
  let fast = head;
  let slow = head;
  while(fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
}