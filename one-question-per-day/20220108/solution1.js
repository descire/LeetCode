const grayCode = function(n) {
    const ans = [0];
    for (let i = 1; i <=n; i++) {
        const m = ans.length;
        for (let j = m - 1; j >= 0; j--) {
            ans.push(ans[j] | (1 << (i - 1)))
        }
    }
    return ans;
};