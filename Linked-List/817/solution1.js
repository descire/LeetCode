/**
 * https://leetcode-cn.com/problems/linked-list-components/
 * 
 * 817. 链表组件
 * 
 * Medium
 * 
 * 88ms 79.31%
 * 39mb 100.00%
 */
const numComponents = (head, G) => {
  if (!head) {
    return 0;
  }

  const record = new Set(G);
  let ans = 0;
  while(head) {
    if (record.has(head.val) && (!head.next || !record.has(head.next.val))) {
      ++ans;
    }
    head = head.next;
  }
  return ans;
}