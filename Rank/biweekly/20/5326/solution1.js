const countOrders = n => {
  const dp = Array(n + 1).fill(0);
  dp[0] = 0;
  dp[1] = 1;
  if (n === 1) {
    return dp[1];
  }
  for (let i = 2; i <= n; i++) {
    const k = i * 2 - 1;
    console.log(dp[i - 1], k)
    dp[i] = dp[i - 1] * (k + k * (k - 1) / 2) % (10 ** 9 + 7);
  }

  return dp[n];
}

console.log(countOrders(3))