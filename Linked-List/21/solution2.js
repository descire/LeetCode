/**
 * 递归
 * 时间复杂度 O(m + n)
 * 空间复杂度 O(m + n)
 */
 const mergeTwoLists = function(list1, list2) {
    if (!list1) {
        return list2;
    } else if (!list2) {
        return list1;
    } else if (list1.val <= list2.val) {
        list1.next = mergeTwoLists(list1.next, list2);
        return list1;
    } else {
        list2.next = mergeTwoLists(list1, list2.next);
        return list2;
    }
};