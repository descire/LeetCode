const findMaxForm = (strs, m, n) => {
  const getZeroAndOne = (str) => {
    let zero = 0;
    let one = 0;
    for (let i = 0; i < str.length; i++) {
      if (str[i] === '0') {
        zero++;
      } else {
        one++;
      }
    }
    return [zero, one];
  }

  const length = strs.length;
  const dp = new Array(length + 1).fill(0).map(() => new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(0)));

  for (let i = 1; i <= length; i++) {
    const [zeros, ones] = getZeroAndOne(strs[i - 1]);
    for (let j = 0; j <= m; j++) {
      for (let k = 0; k <= n; k++) {
        dp[i][j][k] = dp[i - 1][j][k];
        if (j >= zeros && k >= ones) {
          dp[i][j][k] = Math.max(dp[i][j][k], dp[i - 1][j - zeros][k - ones] + 1);
        }
      }
    }
  }
  return dp[length][m][n];
}