/**
 * https://leetcode-cn.com/problems/next-greater-node-in-linked-list/
 * 
 * 1019. 链表中的下一个更大节点
 * 
 * Medium
 * 
 * 逆向思维
 * 
 * 172ms 96.15%
 * 48.8mb 23.81%
 */
const nextLargerNodes = head => {
  let ans = [];
  if (!head) {
    return ans;
  }

  let items = [];
  let indexs = [];
  let index = 0;
  let currentHead = head;
  while(currentHead) {
    // 修复之前的值
    while(items.length && currentHead.val > items[items.length - 1]) {
      ans[indexs.pop()] = currentHead.val;
      items.pop();
    }
    ans.push(0);
    items.push(currentHead.val);
    indexs.push(index++);
    currentHead = currentHead.next;
  }
  return ans;
}