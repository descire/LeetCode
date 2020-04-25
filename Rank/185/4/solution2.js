/**
 * https://leetcode-cn.com/problems/build-array-where-you-can-find-the-maximum-exactly-k-comparisons/
 * 
 * 生成数组
 * 
 * Hard
 * 
 * 数位DP
 */
const MOD = 1e9 + 7;
const numOfArrays = (n, m, k) => {
  const dp = Array.from({ length: n + 1 }, () => Array.from({ length: m + 1 }, () => Array(n + 1).fill(-1)));

  return dfs(n - 1, 0, 0);
  function dfs(pos, cm, ck) {
    if (pos === -1) {
      if (ck === k) {
        return 1;
      }
      return 0;
    }
  
    if (ck > k) {
      return 0;
    }

    if (dp[pos][cm][ck] !== -1) {
      return dp[pos][cm][ck];
    }

    let count = 0;
    for (let i = 1; i <= m; i++) {
      if (i > cm) {
        count = (count + dfs(pos - 1, i, ck + 1)) % MOD;
      } else {
        count = (count + dfs(pos - 1, cm, ck)) % MOD;
      }
    }

    dp[pos][cm][ck] = count;
    return count;
  }
}