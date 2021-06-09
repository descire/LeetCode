const profitableSchemes = (n, minProfit, group, profit) => {
  const len = group.length;
  const MOD = 1e9 + 7;

  const dp = new Array(len + 1).fill(0).map(() => new Array(n + 1).fill(0).map(() => new Array(minProfit + 1).fill(0)));

  dp[0][0][0] = 1;
  for (let i = 1; i <= len; i++) {
    const x = group[i - 1];
    const y = profit[i - 1];
    for (let j = 0; j <= n; j++) {
      for (let k = 0; k <= minProfit; k++) {
        if (j < x) {
          // 人不够
          dp[i][j][k] = dp[i - 1][j][k];
        } else {
          dp[i][j][k] = (dp[i - 1][j][k] + dp[i - 1][j - x][Math.max(0, k - y)]) % MOD;
        }
      }
    }
  }

  let sum = 0;
  for (let j = 0; j <= n; j++) {
    sum = (sum + dp[len][j][minProfit]) % MOD;
  }

  return sum;
}