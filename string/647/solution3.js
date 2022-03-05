var countSubstrings = function(s) {
    let n = s.length;
    let t = ['$', '#'];
    for (let i = 0; i < n; ++i) {
        t.push(s.charAt(i));
        t.push('#');
    }
    n = t.length;
    t.push('!');
    t = t.join('');

    const f = new Array(n);
    let iMax = 0, rMax = 0, ans = 0;
    for (let i = 1; i < n; ++i) {
        // 初始化 f[i]
        f[i] = i <= rMax ? Math.min(rMax - i + 1, f[2 * iMax - i]) : 1;
        // 中心拓展
        while (t.charAt(i + f[i]) == t.charAt(i - f[i])) {
            ++f[i];
        }
        // 动态维护 iMax 和 rMax
        if (i + f[i] - 1 > rMax) {
            iMax = i;
            rMax = i + f[i] - 1;
        }
        // 统计答案, 当前贡献为 (f[i] - 1) / 2 上取整
        ans += Math.floor(f[i] / 2);
    }

    return ans;
};