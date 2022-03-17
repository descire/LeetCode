/**
 * 时间复杂度：O(n)
 * 空间复杂度：O(1)
 */
const swapNodes = function(head, k) {
    let currentHead = head;
    let currentHead2 = head;
    let x;
    while (currentHead) {
        if (k === 0) {
            currentHead2 = currentHead2.next;
        }
        if (k > 0) {
            if (k === 1) {
                x = currentHead;
            }
            k--;
        }
        currentHead = currentHead.next;
    }

    const temp = x.val;
    x.val = currentHead2.val;
    currentHead2.val = temp;

    return head;
};