/**
 * https://leetcode-cn.com/problems/next-greater-node-in-linked-list/
 * 
 * 1019. 链表中的下一个更大节点
 * 
 * Medium
 * 
 * 488ms 37.18%
 * 48.3mb 28.57%
 */
const nextLargerNodes = head => {
  let ans = [];
  if (!head) {
    return ans;
  }
  let temp = [];
  let currentHead = head;
  // O(n)
  while(currentHead) {
    temp.push(currentHead.val);
    currentHead = currentHead.next;
  }

  // O(n^2)
  for (let i = 0, max = temp.length; i < max; i++) {
    let item = 0;
    for (let j = i + 1; j < max; j++) {
      if (temp[j] > temp[i]) {
        item = temp[j];
        break;
      }
    }
    ans.push(item);
  }

  return ans;
}