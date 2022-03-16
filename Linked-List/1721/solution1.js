/**
 * 时间复杂度：O(n)
 * 空间复杂度：O(1)
 */
const swapNodes = function(head, k) {
    let length = 0;

    let x = null;

    let currentHead = head;
    while (currentHead) {
        length++;
        if (length === k) {
            x = currentHead;
        }
        currentHead = currentHead.next;
    }

    let k2 = length - k;
    let y = null;
    currentHead = head;
    while (k2--) {
        currentHead = currentHead.next;
    }
    y = currentHead;

    const xval = x.val;

    x.val = y.val;
    y.val = xval;

    return head;
};