/**
 * 哈希表
 * 时间复杂度 O(n+m)
 * 空间复杂度 O(n)
 */
const getIntersectionNode = function(headA, headB) {
  const record = new Set();

  while (headA !== null) {
    record.add(headA);
    headA = headA.next;
  }

  while (headB !== null) {
    if (record.has(headB)) {
      return headB;
    }
    headB = headB.next;
  }

  return null;
};