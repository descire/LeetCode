/**
 * https://leetcode-cn.com/problems/restore-the-array/
 * 
 * 恢复数组
 * 
 * Hard
 * 
 * 时间复杂度 O(n^2)
 * 
 * 空间复杂度 O(n)
 */
const MOD = 10 ** 9 + 7;
const numberOfArrays = (s, k) => {
  const n = s.length;
  const dp = Array(n + 1).fill(1);

  for (let i = n - 1; i >= 0; i--) {
    if (s[i] === '0') {
      // 不能有前导 0
      dp[i] = 0;
      continue;
    }
    let count = 0;
    for (let j = 1; j + i <= n; j++) {
      let temp = s.substr(i, j);
      if (Number.parseInt(temp) > k) {
        break;
      }
      count = (count + dp[i + j]) % MOD;
    }
    dp[i] = count;
  }
  return dp[0];
}