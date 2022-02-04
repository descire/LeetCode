/**
 * 时间复杂度：O(nm)
 * 空间复杂度：O(n)
 */
const isMapEqual = (m1, m2) => {
    if (m1.size !== m2.size) {
        return false;
    }

    for (const [key, val] of m1) {
        const val2 = m2.get(key);

        if (val2 !== val || !m2.has(key)) {
            return false;
        }
    }

    return true;
}

const checkInclusion = function(s1, s2) {
    const len1 = s1.length;
    const len2 = s2.length;
    if (len1 > len2) {
        return false;
    }

    const record1 = new Map();

    for (let i = 0; i < s1.length; i++) {
        if (!record1.has(s1[i])) {
            record1.set(s1[i], 0);
        }

        record1.set(s1[i], record1.get(s1[i]) + 1);
    }

    const record2 = new Map();
    for (let i = 0; i < s1.length; i++) {
        if (!record2.has(s2[i])) {
            record2.set(s2[i], 0);
        }

        record2.set(s2[i], record2.get(s2[i]) + 1);
    }

    if (isMapEqual(record1, record2)) {
        return true;
    }

    for (let i = len1; i < len2; i++) {
        record2.set(s2[i], (record2.get(s2[i]) || 0) + 1);
        record2.set(s2[i - len1], record2.get(s2[i - len1]) - 1);
        if (record2.get(s2[i - len1]) === 0) {
            record2.delete(s2[i - len1]);
        }

        if (isMapEqual(record1, record2)) {
            return true;
        }
    }

    return false;
};