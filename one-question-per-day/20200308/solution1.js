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
 * 时间复杂度 O(n^2*amount)
 * 空间复杂度 O(n*amount)
 * 
 * 328ms 9.59%
 * 49.1mb 11.60%
 */
const coinChange = (coins, amount) => {
  const dp = Array.from({ length: coins.length + 1 }, () => Array(amount + 1).fill(Infinity));
  // 边界情况
  for (let i = 0; i <= coins.length; i++) {
    dp[i][0] = 0;
  }

  for (let i = 1, max = coins.length; i <= max; i++) {
    for (let j = 1; j <= amount; j++) {
      // 向前寻找是否有满足的组合
      dp[i][j] = dp[i - 1][j];
      for (let k = i; k >= 0; k--) {
        // 边界情况
        if (j - coins[i - 1] >= 0) {
          dp[i][j] = Math.min(dp[i][j], dp[k][j - coins[i - 1]] + 1);
        }
      }
    }
  }

  if (dp[coins.length][amount] === Infinity) {
    return -1;
  }

  return dp[coins.length][amount];
}