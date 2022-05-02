/**
 * 时间复杂度：O(n)
 * 空间复杂度：O(1)
 */
const swapNodes = function(head, k) {
    let currentHead1 = head;
    let currentHead2 = head;

    while (--k) {
        currentHead1 = currentHead1.next;
    }

    const x = currentHead1;

    while (currentHead1.next) {
        currentHead1 = currentHead1.next;
        currentHead2 = currentHead2.next;
    }

    const y = currentHead2

    const temp = x.val;
    x.val = y.val;
    y.val = temp;

    return head;
};