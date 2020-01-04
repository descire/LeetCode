/**
 * https://leetcode-cn.com/problems/remove-duplicates-from-sorted-list/
 * 
 * 83. 删除排序链表中的重复元素
 * 
 * Easy
 * 
 * 80ms 61.04%
 * 36.4mb 10.74%
 */
const deleteDuplicates = head => {
  if (!head || !head.next) {
    return head;
  }
  let currentHead = head;
  while (currentHead && currentHead.next) {
    if (currentHead.val === currentHead.next.val) {
      currentHead.next = currentHead.next.next;
    } else {
      currentHead = currentHead.next;
    }
  }
  return head;
}