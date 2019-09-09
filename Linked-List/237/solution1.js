/**
 * https://leetcode-cn.com/problems/delete-node-in-a-linked-list/
 * 
 * 237. 删除链表中的节点
 * 
 * Easy
 * 
 * 84ms 91.84%
 * 35.5mb 66.57%
 */
const deleteNode = node => {
  node.val = node.next.val;
  node.next = node.next.next;
}