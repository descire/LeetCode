/**
 * 时间复杂度：O(n^2)
 * 空间复杂度：O(1)
 */
const firstUniqChar = function(s) {
    for (let i = 0; i < s.length; i++) {
        if (s.lastIndexOf(s[i]) === s.indexOf(s[i])) {
            return i;
        }
    }

    return -1;
};