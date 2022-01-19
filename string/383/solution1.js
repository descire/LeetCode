/**
 * 哈希表
 * 时间复杂度：O(max(n, m))
 * 空间复杂度：O(m)
 */
const canConstruct = function(ransomNote, magazine) {
    const record = new Map();
    for (let i = 0; i < magazine.length; i++) {
        const item = magazine[i];
        if (!record.has(item)) {
            record.set(item, 0);
        }
        record.set(item, record.get(item) + 1);
    }

    for (let i = 0; i < ransomNote.length; i++) {
        const item = ransomNote[i];
        if (record.get(item) === undefined || record.get(item) < 1) {
            return false;
        }
        record.set(item, record.get(item) - 1);
    }

    return true;
};