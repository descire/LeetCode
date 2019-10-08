/**
 * https://leetcode-cn.com/problems/sort-list/
 * 
 * 148. 排序链表
 * 
 * Medium
 * 
 * 124ms 85.23%
 * 40.8mb 48.53%
 */
const sortList = head => {
  const result = [];
  let sortHead = head;
  while(sortHead) {
    result.push(sortHead.val);
    sortHead = sortHead.next;
  }
  result.sort((a, b) => a - b);

  let temp = head;
  for (let i = 0, max = result.length; i < max; i++) {
    temp.val = result[i];
    temp = temp.next;
  }
  return head;
}
