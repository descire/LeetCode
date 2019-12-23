/**
 * https://leetcode-cn.com/problems/convert-binary-number-in-a-linked-list-to-integer/
 * 
 * Easy
 * 
 * 48ms 99.31%
 * 33.7mb 100.00%
 * 
 * 基本操作 遍历链表
 */
const getDecimalValue = head => {
  if (!head) {
    return 0;
  }

  let currentHead = head;
  let ans = '';

  while (currentHead) {
    ans += currentHead.val;
    currentHead = currentHead.next;
  }

  return Number.parseInt(ans, 2);
}