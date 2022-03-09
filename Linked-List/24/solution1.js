/**
 * 时间复杂度：O(n)
 * 空间复杂度：O(n)
 */
const swapPairs = head => {
    if (head === null || head.next === null) {
        return head;
    }
    const newHead = head.next;
    head.next = swapPairs(newHead.next);
    newHead.next = head;
    return newHead;
}