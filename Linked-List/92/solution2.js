/**
 * 时间复杂度：O(n)
 * 空间复杂度：O(1)
 */
const reverseBetween = (head, m, n) => {
    const dummyHead = new ListNode(null);
    dummyHead.next = head;

    let preHead = dummyHead;
    for (let i = 0; i < m - 1; i++) {
        preHead = preHead.next;
    }

    let current = preHead.next;
    let next = null;

    for (let i = 0; i < n - m; i++) {
        next = current.next;
        current.next = next.next;
        next.next = preHead.next;
        preHead.next = next;
    }

    return dummyHead.next;
}