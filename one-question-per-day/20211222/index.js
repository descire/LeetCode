// 官方 KMP 解法，一学就会，一用就忘
/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 */
 const repeatedStringMatch = (a, b) => {
    const an = a.length, bn = b.length;
    const index = strStr(a, b);
    if (index === -1) {
        return -1;
    }
    if (an - index >= bn) {
        return 1;
    }
    return Math.floor((bn + index - an - 1) / an) + 2;
}

const strStr = (haystack, needle) => {
    const n = haystack.length, m = needle.length;
    if (m === 0) {
        return 0;
    }
    const pi = new Array(m).fill(0);
    for (let i = 1, j = 0; i < m; i++) {
        while (j > 0 && needle[i] !== needle[j]) {
            j = pi[j - 1];
        }
        if (needle[i] === needle[j]) {
            j++;
        }
        pi[i] = j;
    }
    for (let i = 0, j = 0; i - j < n; i++) { // b 开始匹配的位置是否超过第一个叠加的 a
        while (j > 0 && haystack[i % n] !== needle[j]) { // haystack 是循环叠加的字符串，所以取 i % n
            j = pi[j - 1];
        }
        if (haystack[i % n] == needle[j]) {
            j++;
        }
        if (j === m) {
            return i - m + 1;
        }
    }
    return -1;
}