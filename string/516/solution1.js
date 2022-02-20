/**
 * 时间复杂度：O(n^2)
 * 空间复杂度：O(n^2)
 */
const longestPalindromeSubseq = function(s) {
    const max = s.length
    const dp = Array(max).fill(0).map(() => Array(max).fill(0))
    for (let i = max - 1; i >= 0; i--) {
        dp[i][i] = 1;
        const c1 = s[i];
        for (let j = i + 1; j < max; j++) {
            const c2 = s[j];
            if (c1 === c2) {
                dp[i][j] = dp[i + 1][j - 1] + 2;
            } else {
                dp[i][j] = Math.max(dp[i + 1][j], dp[i][j - 1]);
            }
        }
    }

    return dp[0][max - 1];
};