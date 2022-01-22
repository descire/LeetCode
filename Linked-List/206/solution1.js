/**
 * 迭代
 * 
 * 时间复杂度：O(n)
 * 
 * 空间复杂度：O(1)
 * 
 */
const reverseList = head => {
  let prev = null;
  let current = head;
  while (current) {
    const next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }

  return prev;
}