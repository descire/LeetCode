/**
 *  https://leetcode-cn.com/problems/linked-list-cycle-ii/
 * 
 *  142. 环形链表 II
 * 
 * Medium
 * 
 * 找环的入口
 * 链表专题再着重讲解
 * 
 * 92ms 94.77%
 * 36.5mb 43.40%
 */
const detectCycle = head => {
  let fast = head
  let slow = head
  while (fast && fast.next) {
    fast = fast.next.next
    slow = slow.next
    if (slow === fast) {
      break
    }
  }

  if (!fast || !fast.next) {
    return null
  }

  slow = head
  while (fast !== slow) {
    fast = fast.next
    slow = slow.next
  }

  return slow
}