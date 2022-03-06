/**
 * 时间复杂度：O(n)
 * 空间复杂度：O(1)
 */
const removeZeroSumSublists = head => {

  const dummyHead = new ListNode(null);
  dummyHead.next = head;

  const sumRecord = new Map();
  let sum = 0;
  sumRecord.set(sum, dummyHead);

  while (head) {
    sum += head.val;
    if (sumRecord.has(sum)) {
      let removeHead = sumRecord.get(sum).next;
      let tempSum = sum;
      while (removeHead !== head) {
        tempSum += removeHead.val;
        sumRecord.delete(tempSum);
        removeHead = removeHead.next;
      }
      sumRecord.get(sum).next = head.next;
    } else {
      sumRecord.set(sum, head);
    }
    head = head.next;
  }

  return dummyHead.next;
}