/**
 * https://leetcode-cn.com/problems/remove-zero-sum-consecutive-nodes-from-linked-list/
 * 
 * 1171. 从链表中删去总和值为零的连续节点
 * 
 * Medium
 * 
 * 72ms 69.44%
 * 37mb 10.00%
 */
const removeZeroSumSublists = head => {
  if (!head) {
    return head;
  }

  const dummy = new ListNode(0);
  dummy.next = head;

  let sum = 0;
  const record = new Map();
  record.set(sum, dummy);

  while(head) {
    sum += head.val;
    if (record.has(sum)) {
      let removeHead = record.get(sum).next;
      let tempSum = sum;
      // 清除之前的记录
      while(removeHead !== head) {
        tempSum += removeHead.val;
        record.delete(tempSum);
        removeHead = removeHead.next;
      }
      // 更新指向
      record.get(sum).next = head.next;
    } else {
      record.set(sum, head);
    }
    head = head.next;
  }

  return dummy.next;
}