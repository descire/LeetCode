/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} k
 * @return {number}
 */
var findCheapestPrice = function(n, flights, src, dst, k) {
  const MAX = Number.MAX_SAFE_INTEGER;
  const dp = new Array(k + 2).fill(0).map(() => new Array(n).fill(MAX));

  // 初始状态
  dp[0][src] = 0;

  for (let i = 1; i <= k + 1; i++) {
    for (const flight of flights) {
      const [start, end, cost] = flight;
      dp[i][end] = Math.min(dp[i][end], dp[i - 1][start] + cost);
    }
  }

  let ans = MAX;
  // 找出所有中转情况中的最小值
  for (let i = 0; i < k + 2; i++) {
    ans = Math.min(ans, dp[i][dst]);
  }

  return ans === MAX ? -1 : ans;
};