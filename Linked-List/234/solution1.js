/**
 * https://leetcode-cn.com/problems/palindrome-linked-list/
 * 
 * 234. 回文链表
 * 
 * Easy
 * 
 * 72ms 95.22%
 * 40.6mb 34.25%
 * 
 * 时间复杂度 O(n)
 * 空间复杂度 O(n)
 */

const isPalindrome = (head) => {
  const list = [];
  while(head) {
    list.push(head.val);
    head = head.next;
  }
  
  return validPalindrome(list);
}

function validPalindrome (list) {
  const max = list.length
  let start = 0;
  let end = max - 1;
  while (start < end) {
    const startItem = list[start++];
    const endItem = list[end--];
    if (startItem !== endItem) {
      return false;
    }
  }
  return true;
}
