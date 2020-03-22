/**
 * https://leetcode-cn.com/problems/pizza-with-3n-slices/comments/
 * 
 * 5351. 3n 块披萨
 * 
 * Hard
 * 
 * dp[i][j] 前 i 块披萨中拿 j 块最大和值。
 * 
 * 96ms 100.00%
 * 
 * 37.6mb 100.00%
 */

const maxSizeSlices = slices => {
  let ans = 0;
  const max = slices.length;
  const maxCanHava = Math.floor(max / 3);
  let dp = Array.from({ length: max }, () => Array(maxCanHava + 1).fill(0));
  
  // 第一块拿，最后一块不能拿
  dp[0][1] = slices[0];

  for (let i = 1; i < max - 1; i++) {
    for (let j = 1; j <= maxCanHava; j++) {
      const pre = i - 2 >= 0 ? dp[i - 2][j - 1] : 0;
      dp[i][j] = Math.max(dp[i - 1][j], pre + slices[i])
    }
    ans = Math.max(dp[i][maxCanHava], ans);
  }

  dp = Array.from({ length: max }, () => Array(maxCanHava + 1).fill(0));
  // 第一块不拿，最后一块拿
  for (let i = 1; i < max; i++) {
    for (let j = 1; j <= maxCanHava; j++) {
      const pre = i - 2 >= 0 ? dp[i - 2][j - 1] : 0;
      dp[i][j] = Math.max(dp[i - 1][j], pre + slices[i])
    }
    ans = Math.max(dp[i][maxCanHava], ans);
  }

  return ans;
}