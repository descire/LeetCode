const lastStoneWeightII = stones => {
  const len = stones.length;
  let sum = 0;
  for (let i = 0; i < len; i++) {
    sum += stones[i];
  }
  const t = Math.floor(sum / 2);
  const dp = new Array(len + 1).fill(0).map(() => new Array(t + 1).fill(0));

  for (let i = 1; i <= len; i++) {
    const stone = stones[i - 1];
    for (let j = 0; j <= t; j++) {
      dp[i][j] = dp[i - 1][j];
      if (j >= stone) {
        dp[i][j] = Math.max(dp[i][j], dp[i - 1][j - stone] + stone);
      }
    }
  }

  return Math.abs(sum - dp[len][t] - dp[len][t]);
}