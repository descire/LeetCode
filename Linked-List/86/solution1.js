/**
 * https://leetcode-cn.com/problems/partition-list/
 * 
 * 86. 分隔链表
 * 
 * Medium
 * 
 * 68ms 85.16ms
 * 34.1mb 31.82%
 */
const partition = (head, x) => {
  if (!head || !head.next) {
    return head;
  }
  const min = new ListNode(-1);
  const max = new ListNode(-1);
  let current_min = min;
  let current_max = max;

  while(head) {
    if (head.val < x) {
      current_min.next = head;
      current_min = current_min.next;
    } else {
      current_max.next = head;
      current_max = current_max.next;
    }
    head = head.next;
  }
  current_min.next = max.next;
  current_max.next = null;
  return min.next; 
}