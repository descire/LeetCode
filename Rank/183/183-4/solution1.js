/**
 * https://leetcode-cn.com/problems/stone-game-iii/solution/dp-yi-ge-zhuan-yi-fang-cheng-jie-jue-by-enko-2/
 * 
 * 5379. 石子游戏 III
 * 
 * Hard
 * 
 * 156ms 100.00%
 * 59.2mb 100.00%
 */
const stoneGameIII = stoneValue => {
  const n = stoneValue.length;
  const dp = Array(n + 3).fill(0);
  stoneValue.push(0);
  stoneValue.push(0);
  for (let i = n - 1; i >= 0; i--) {
    const x = stoneValue[i] - dp[i + 1];
    const y = stoneValue[i] + stoneValue[i + 1] - dp[i + 2];
    const z = stoneValue[i] + stoneValue[i + 1] + stoneValue[i + 2] - dp[i + 3];
    dp[i] = Math.max(x, y, z);
  }

  if (dp[0] > 0) {
    return 'Alice';
  }

  if (dp[0] < 0) {
    return 'Bob';
  }

  return 'Tie';
}