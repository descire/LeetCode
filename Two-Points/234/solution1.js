/**
 * https://leetcode-cn.com/problems/palindrome-linked-list/
 * 
 * 234. 回文链表
 * 
 * Easy
 * 
 * 96.51%
 * 37.67%
 * 
 */
const isPalindrome = head => {
  const arr = []

  while (head) {
    arr.push(head.val)
    head = head.next
  }

  let start = 0
  let end = arr.length - 1

  while (start < end) {
    if (arr[start] !== arr[end]) {
      return false
    }
    start++
    end--
  }

  return true
}