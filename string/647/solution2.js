/**
 * 中心拓展
 * 
 * 时间复杂度：O(n^2)
 * 空间复杂度：O(1)
 */
var countSubstrings = function(s) {
    let ans = 0;
    const max = s.length;

    for (let i = 0; i < max; i++) {
        ans++;
        let start = i - 1;
        let end = i + 1;
        while (start >= 0 && end < max && s[start] === s[end]) {
            ans++;
            start--;
            end++;
        }
    }

    for (let i = 1; i < max; i++) {
        let start = i - 1;
        let end = i;

        while (start >= 0 && end < max && s[start] === s[end]) {
            ans++;
            start--;
            end++;
        }
    }

    return ans;
};