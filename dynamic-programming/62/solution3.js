/**
 * https://leetcode.com/problems/unique-paths/
 * 
 * 62. Unique Paths
 * 
 * [Medium]
 * 
 * 
 * 优化动态规划的解法
 * 
 * 定义状态
 * 
 * dp[i] 表示 机器人在第n行的第i列移动的步数
 * 
 * 初始状态
 * 
 * dp[i] = 1
 * 
 * 状态转移方程（不太好描述，举个例子）
 * 
 * 例如 n = 2 m = 3 也就是在2行3列的网格中
 * 
 * 那么当 n = 1 时 dp = [1, 1, 1] 这个实际上是边界情况
 * 
 * 当 n = 2 时， 此时的dp中每个格子实际上已经加上了其上方格子的路径数，那么再加上其左边的格子的路径数即可
 * 
 * 即： dp[i] += dp[i - 1]
 * 
 * 所以递推公式为 dp[i] += dp[i - 1] 不过仍需要遍历整个网格。
 * 
 */

const uniquePaths = (m, n) => {

  const dp = []

  for (let i = 0; i < m; i++) {
    dp[i] = 1
  }

  for (let i = 1; i < n; i++) {
    for (let j = 1; j < m; j++) {
      dp[j] += dp[j - 1]
    }
  }
  return dp[m - 1]
}

uniquePaths(4, 4)