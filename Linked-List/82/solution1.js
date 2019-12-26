/**
 * https://leetcode-cn.com/problems/remove-duplicates-from-sorted-list-ii/
 * 
 * 82. 删除排序链表中的重复元素 II
 * 
 * Medium
 * 
 * 76ms 71.94%
 * 36.3mb 26.32%
 */
const deleteDuplicates = head => {
  if (!head || !head.next) {
    return head;
  }
  const newHead = new ListNode(null);
  newHead.next = head;

  let preHead = newHead;
  let currentHead = head;
  while (currentHead && currentHead.next) {
    const currentValue = currentHead.val;
    let nextHead = currentHead.next;
    let isDuplicate = false;
    while (nextHead && currentValue === nextHead.val) {
      nextHead = nextHead.next;
      isDuplicate = true;
    }
    
    if (isDuplicate) {
      preHead.next = nextHead;
    } else {
      preHead = currentHead;
    }
    currentHead = nextHead;
  }

  return newHead.next;
}