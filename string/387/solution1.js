/**
 * 暴力解法超时
 * 
 * 哈希 
 * 
 * 时间复杂度：O(n)
 * 空间复杂度：O(1)
 */
const firstUniqChar = function(s) {
    const record = new Map();
    for (let i = 0; i < s.length; i++) {
        if (!record.has(s[i])) {
            record.set(s[i], 0);
        }
        record.set(s[i], record.get(s[i]) + 1);
    }

    for (let i = 0; i < s.length; i++) {
        if (record.get(s[i]) === 1) {
            return i;
        }
    }

    return -1;
};