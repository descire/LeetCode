/**
 * https://leetcode-cn.com/problems/insertion-sort-list/
 * 
 * 147. 对链表进行插入排序
 * 
 * Medium
 */
const insertionSortList = head => {
  if (!head || !head.next) {
    // 不需要排序的情况
    return head;
  }
  // 有序链表
  const sortedList = new ListNode(head.val);
  head = head.next;
  while (!head) {
    const tempList = head.next;
    const currentList = sortedList;
    while(currentList.next && currentList.next.val < head.val) {
      currentList = currentList.next;
    }
    head.next = currentList.next;
    currentList.next = head;
    head = tempList;
  }
  return sortedList;
}