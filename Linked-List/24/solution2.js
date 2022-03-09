/**
 * 时间复杂度：O(n)
 * 空间复杂度：O(1)
 */
 const swapPairs = head => {
    const dummyHead = new ListNode(null);
    dummyHead.next = head;

    let temp = dummyHead;

    while (temp.next !== null && temp.next.next !== null) {
        const node1 = temp.next;
        const node2 = temp.next.next;

        temp.next = node2;
        node1.next = node2.next;
        node2.next = node1;
        temp = node1;
    }

    return dummyHead.next;
}