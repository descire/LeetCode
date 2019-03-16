/**
 * https://leetcode.com/problems/domino-and-tromino-tiling/
 * 
 * 790. Domino and Tromino Tiling
 * 
 * Medium
 */
const kMod = 10 ** 9 + 7
const numTilings = N => {
  const dp = []
  dp[0] = [1, 0, 0]
  dp[1] = [1, 0, 0]

  for (let i = 2; i <= N; i++) {
    dp[i] = []

    dp[i][0] = (dp[i - 1][0] + dp[i - 2][0] + dp[i - 1][1] + dp[i - 1][2]) % kMod
    dp[i][1] = (dp[i - 2][0] + dp[i - 1][2]) % kMod
    dp[i][2] = (dp[i - 2][0] + dp[i - 1][1]) % kMod
  }

  return dp[N][0]
}