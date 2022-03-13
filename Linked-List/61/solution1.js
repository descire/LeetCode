/**
 * 时间复杂度：O(n)
 * 空间复杂度：O(1)
 */
const rotateRight = (head, k) => {

  if (!head || !head.next) {
    return head;
  }

  let length = 0;
  let currentHead = head;
  while (currentHead) {
    length++;
    currentHead = currentHead.next;
  }

  let index = length - (k % length) - 1;

  currentHead = head;
  while (index) {
    currentHead = currentHead.next;
    index--;
  }

  let lastHead = currentHead;
  while (lastHead.next) {
    lastHead = lastHead.next;
  }

  lastHead.next = head;
  const ans = currentHead.next;
  currentHead.next = null;

  return ans;
}