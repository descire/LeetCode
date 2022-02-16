/**
 * 时间复杂度：O(n)
 * 空间复杂度：O(n)
 */
const isPalindrome = function(x) {
    if (x < 0) {
        return false;
    }
    const str = String(x);
    let start = 0;
    let end = str.length - 1;

    while (start < end) {
        if (str[start] !== str[end]) {
            return false;
        }
        start++;
        end--;
    }

    return true;
};