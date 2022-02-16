/**
 * 时间复杂度：O(n^2)
 * 空间复杂度：O(1)
 */
const longestPalindrome = (s) => {
    if (!s) {
        return ''
    }

    let start = 0;
    let end = 0;
    for (let i = 0; i < s.length; i++) {
        const odd = expandAroundCenter(s, i - 1, i + 1);
        const even = expandAroundCenter(s, i, i + 1);
        const len = Math.max(odd.len, even.len);
        if (len > end - start) {
            if (odd.len === len) {
                start = odd.left;
                end = odd.right;
            } else {
                start = even.left;
                end = even.right;
            }
        }
    }

    return s.substring(start, end + 1);
}

function expandAroundCenter (s, left, right) {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
        --left;
        ++right;
    }

    return {
        left: left + 1,
        right: right - 1,
        len: right - left - 1
    }
}