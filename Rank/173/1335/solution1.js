/**
 * https://leetcode-cn.com/problems/minimum-difficulty-of-a-job-schedule/
 * 
 * 1335. 工作计划的最低难度
 * 
 * Hard
 * 
 * 80ms 80.00%
 * 35.4mb 100.00%
 */
const minDifficulty = (jobDifficulty, d) => {
  const jobCount = jobDifficulty.length;
  // 边界情况
  if (jobCount < d) {
    return -1;
  }

  /**
   * dp[n][d]:
   * 
   * n 个 job d 天 花费所需要的最小难度
   */

  const dp = Array.from({ length: jobCount + 1 }, () => Array(d + 1).fill(Infinity));

  dp[0][0] = 0;

  for (let i = 1; i <= jobCount; i++) {
    for (let j = 1; j <= d; j++) {
      let currentJobDifficulty = 0;
      // 根据划分任务的数量，来求出前一天最少的难度
      for (let k = i - 1; k >= j - 1; k--) {
        currentJobDifficulty = Math.max(currentJobDifficulty, jobDifficulty[k]);
        dp[i][j] = Math.min(dp[i][j], dp[k][j - 1] + currentJobDifficulty);
      }
    }
  }
  return dp[jobCount][d];
}