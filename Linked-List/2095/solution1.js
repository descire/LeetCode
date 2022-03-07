/**
 * 时间复杂度：O(n)
 * 空间复杂度：O(1)
 */
const deleteMiddle = function(head) {
    if (!head.next) {
        return null;
    }
    let fast = head;
    let slow = head;
    let pre = null;
    while (fast && fast.next) {
        fast = fast.next.next;
        pre = slow;
        slow = slow.next;
    }

    pre.next = slow.next;

    return head;
};