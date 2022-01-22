/**
 * 递归
 * 
 * 时间复杂度：O(n)
 * 空间复杂度：O(n)
 */
const removeElements = function(head, val) {
  if (!head) {
    return null;
  }

  head.next = removeElements(head.next, val);
  return head.val === val ? head.next : head;
};