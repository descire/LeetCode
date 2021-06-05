// 递归
const removeElements = function(head, val) {
  if (head === null) {
    return null;
  }
  head.next = removeElements(head.next, val);
  return head.val === val ? head.next : head;
};