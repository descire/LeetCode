/**
 * https://leetcode-cn.com/problems/coin-change/
 * 
 * 322. 零钱兑换
 * 
 * Medium
 * 
 * 动态规划
 * 
 * dp[i][j] 前 i 枚硬币能够组成和值 j 的硬币枚数。
 * 
 * 降维
 * 
 * 时间复杂度 O(n*amount)
 * 空间复杂度 O(amount)
 *
 * 
 * 100ms 90.27%
 * 37.1mb 84.53%
 */
const coinChange = (coins, amount) => {
  const dp = Array(amount + 1).fill(Infinity);
  // 边界情况
  dp[0] = 0;

  for (let i = 1, max = coins.length; i <= max; i++) {
    for (let j = 1; j <= amount; j++) {
      if (j - coins[i - 1] >= 0) {
        dp[j] = Math.min(dp[j], dp[j - coins[i - 1]] + 1);
      }
    }
  }

  if (dp[amount] === Infinity) {
    return -1;
  }

  return dp[amount];
}