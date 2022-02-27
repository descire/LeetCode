/**
 * 时间复杂度：O(n)
 * 空间复杂度：O(n)
 */
const isPalindrome = function(head) {
    const list = [];
    while (head) {
        list.push(head.val);
        head = head.next;
    }

    return isPalindromeList(list);
};

function isPalindromeList (list) {
    let start = 0;
    let end = list.length - 1;
    while (start < end) {
        if (list[start] !== list[end]) {
            return false;
        }
        start++;
        end--;
    }

    return true;
}