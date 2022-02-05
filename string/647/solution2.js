/**
 * 中心拓展
 * 
 * 时间复杂度：O(n^2)
 * 空间复杂度：O(1)
 */
var countSubstrings = function(s) {
    const len = s.length;
    let ans = 0;

    for (let i = 0; i < 2 * len - 1; i++) {
        let start = Math.floor(i / 2);
        let end = Math.floor(i / 2) + i % 2;
        while (start >= 0 && end < len && s[start] === s[end] && s[start] !== undefined && s[end] !== undefined) {
            start--;
            end++;
            ans++;
        }
    }

    return ans;
};