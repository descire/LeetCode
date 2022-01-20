/**
 * 哈希表
 * 时间复杂度：O(max(n, m))
 * 空间复杂度：O(n)
 */
const isAnagram = function(s, t) {
    const record = new Map();
    for (let i = 0; i < s.length; i++) {
        record.set(s[i], (record.get(s[i]) || 0) + 1);
    }

    for (let i = 0; i < t.length; i++) {
        const item = t[i];
        if (!record.has(item)) {
            return false;
        }

        record.set(item, record.get(item) - 1);
        if (record.get(item) === 0) {
            record.delete(item);
        }
    }

    return record.size === 0;
};