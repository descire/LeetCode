/**
 * 时间复杂度：O(n)
 * 空间复杂度：O(n)
 */
const hasCycle = head => {
  const record = new Set();

  while (head) {
    if (record.has(head)) {
      return true;
    }
    record.add(head);
    head = head.next;
  }

  return false;
}