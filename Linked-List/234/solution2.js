/**
 * https://leetcode-cn.com/problems/palindrome-linked-list/
 * 
 * 234. 回文链表
 * 
 * Easy
 * 
 * 
 * 
 * 时间复杂度 O(n)
 * 空间复杂度 O(1)
 * 
 * 1 -> 2 -> 3 -> 4 -> 5
 * 
 * 奇数与偶数的处理方式不一样
 * 
 * 一、快慢指针
 * 二、翻转
 * 三、比较
 * 
 * 64ms 98.98%
 * 39.3mb 66.44%
 */

const isPalindrome = (head) => {
  let fast = head;
  let slow = head;
  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
  }

  if (fast) {
    // 元素的个数为偶数
    slow = slow.next;
  }

  // 翻转
  let reverseLinkedList = null;
  while (slow) {
    const temp = slow.next;
    slow.next = reverseLinkedList;
    reverseLinkedList = slow;
    slow = temp;
  }

  while (reverseLinkedList) {
    if (reverseLinkedList.val !== head.val) {
      return false;
    }
    reverseLinkedList = reverseLinkedList.next;
    head = head.next;
  }
  return true;
}

