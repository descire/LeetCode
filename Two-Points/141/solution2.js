/**
 * https://leetcode-cn.com/problems/linked-list-cycle/
 * 
 * 
 * 141. 环形链表
 * 
 * Easy
 * 
 * 快慢指针
 * 
 * 
 * 98.59%
 * 69.73%
 * 
 */
const hasCycle = head => {
  let first = head
  let slow = head

  while (first) {
    if (!first.next) {
      return false
    }
    first = first.next.next
    slow = slow.next
    if (first === slow) {
      return true
    }
  }
  return false
}