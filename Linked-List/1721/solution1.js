/**
 * 时间复杂度：O(n)
 * 空间复杂度：O(1)
 */
const swapNodes = function(head, k) {
    let length = 0;

    let x = null;
    let xPreHead = null;

    let currentHead = head;
    while (currentHead) {
        length++;
        if (length === k - 1) {
            xPreHead = currentHead;
        }
        if (length === k) {
            x = currentHead;
        }
        currentHead = currentHead.next;
    }

    const xSufHead = x.next;

    let k2 = length - k;
    let y = null;
    let yPreHead = null;
    currentHead = head;
    while (k2--) {
        yPreHead = currentHead;
        currentHead = currentHead.next;
    }
    y = currentHead;
    const ySufHead = y.next;

    const xval = x.val;
    const yval = y.val;

    x.val = yval;
    y.val = xval;

    return head;
};