/**
 * 时间复杂度 O(n)
 * 空间复杂度 O(1)
 */
const mergeTwoLists = function(list1, list2) {
    const head = new ListNode(-1);
    let current = head;

    while (list1 && list2) {
        if (list1.val <= list2.val) {
            current.next = list1;
            list1 = list1.next;
        } else {
            current.next = list2;
            list2 = list2.next;
        }

        current = current.next;
    }

    current.next = list1 ? list1 : list2;

    return head.next;
};