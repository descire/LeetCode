/**
 * https://leetcode-cn.com/problems/build-array-where-you-can-find-the-maximum-exactly-k-comparisons/
 * 
 * 生成数组
 * 
 * Hard
 * 
 * 时间复杂度 O(nkm^2)
 * 
 * 空间复杂度 O(nkm)
 * 
 * dp[x][y][z]
 * 
 * 表示 x 个元素的数组 search_cost 为 y ，数组最大值为 z 的方案数
 */
const MOD = 1e9 + 7;
const numOfArrays = (n, m, k) => {
  const dp = Array.from({ length: n + 1 }, () => Array.from({ length: k + 2 }, () => Array(m + 1).fill(0)));

  dp[0][0][0] = 1;
  for (let x = 0; x < n; x++) {
    for (let y = 0; y <= k; y++) {
      for (let z = 0; z <= m; z++) {

        for (let t = 1; t <= m; t++) {
          if (t > z) {
            dp[x + 1][y + 1][t] += dp[x][y][z];
            dp[x + 1][y + 1][t] %= MOD;
          } else {
            dp[x + 1][y][z] += dp[x][y][z];
            dp[x + 1][y][z] %= MOD;
          }
        }
      }
    }
  }

  let ans = 0;
  for (let z = 0; z <= m; z++) {
    ans += dp[n][k][z];
    ans %= MOD;
  }

  return ans;
}