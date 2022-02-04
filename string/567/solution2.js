const checkInclusion = function(s1, s2) {
    const len1 = s1.length;
    const len2 = s2.length;
    if (len1 > len2) {
        return false;
    }

    const record1 = Array(26).fill(0);
    const record2 = Array(26).fill(0);

    for (let i = 0; i < len1; i++) {
        ++record1[s1[i].charCodeAt() - 97];
        ++record2[s2[i].charCodeAt() - 97];
    }

    if (record1.toString() === record2.toString()) {
        return true;
    }

    for (let i = len1; i < len2; i++) {
        ++record2[s2[i].charCodeAt() - 97];
        --record2[s2[i - len1].charCodeAt() - 97];

        if (record1.toString() === record2.toString()) {
            return true;
        }
    }

    return false;
}