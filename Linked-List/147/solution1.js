/**
 * https://leetcode-cn.com/problems/insertion-sort-list/
 * 
 * 147. 对链表进行插入排序
 * 
 * Medium
 * 
 * 108ms 75.68%
 * 36.3mb 50.00%
 */
const insertionSortList = head => {
  if (!head || !head.next) {
    // 不需要排序的情况
    return head;
  }
  // 有序链表
  const sortedList = new ListNode(-1);
  while (head) {
    const tempList = head.next;
    let currentList = sortedList;
    while(currentList.next && currentList.next.val < head.val) {
      currentList = currentList.next;
    }
    // 插入
    head.next = currentList.next;
    currentList.next = head;
    // 还原
    head = tempList;
  }
  return sortedList.next;
}