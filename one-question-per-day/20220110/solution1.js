/**
 * 时间复杂度 O(n^2)
 * 空间复杂度 O(n)
 * @param {*} num 
 * @param {*} index 
 * @param {*} count 
 * @param {*} first 
 * @param {*} second 
 * @returns 
 */
const dfs = (num, index, count, first, second) => {
    if (index >= num.length) {
        return count > 2
    }

    let current = 0;
    for (let i = index; i < num.length; i++) {
        const c = num[i];
        if (num[index] === '0' && i > index) {
            // 不能做为前导0，但是可以单独做为 0 使用
            return false;
        }

        current = current * 10 + Number.parseInt(c);

        if (count >= 2) {
            const sum = first + second;
            if (current > sum) {
                return false;
            }
            if (current < sum) {
                continue;
            }
        }

        if (dfs(num, i + 1, count + 1, second, current)) {
            return true;
        }
    }

    return false;
}

const isAdditiveNumber = function(num) {
    return dfs(num, 0, 0, 0, 0);
};