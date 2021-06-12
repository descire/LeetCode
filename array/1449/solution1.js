const largestNumber = function(cost, target) {
  const dp = new Array(target + 1).fill(Number.MIN_SAFE_INTEGER);
  dp[0] = 0;
  for (let i = 1; i <= 9; i++) {
    const item = cost[i - 1];
    for (let j = item; j <= target; j++) {
      dp[j] = Math.max(dp[j], dp[j - item] + 1);
    }
  }

  if (dp[target] < 0) {
    return '0';
  }

  let ans = '';

  for (let i = 9, j = target; i >= 1; i--) {
    const item = cost[i - 1];
    while (j >= item && dp[j] === dp[j - item] + 1) {
      ans += String(i);
      j -= item;
    }
  }

  return ans;
};