/**
 * 时间复杂度 O(n*m)
 * 空间复杂度 O(n*m)
 * @param {*} original 
 * @param {*} m s
 * @param {*} n 
 * @returns 
 */
const construct2DArray = function(original, m, n) {
    const maxLength = original.length;
    if (m * n !== maxLength) {
        return [];
    }

    const ans = [];
    for (let i = 0; i < maxLength; i++) {
        const index = Math.floor(i / n);
        if (!ans[index]) {
            ans[index] = [];
        }

        ans[index].push(original[i]);
    }

    return ans;
};