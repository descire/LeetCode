/**
 * 模拟
 * 时间复杂度 O(n)
 * 空间复杂度 O(1)
 * @param {*} n 
 * @returns 
 */
const totalMoney = function(n) {
    let ans = 0;
    for (let i = 0; i < n; i++) {
        ans += Math.floor(i / 7) + (i % 7 + 1);
    }

    return ans;
};