/**
 * https://leetcode-cn.com/problems/coin-change/
 * 
 * 322. 零钱兑换
 * 
 * Medium
 * 
 * DFS
 * 
 * 84ms 98.82%
 * 35.1mb 100.00%
 * 
 */
const coinChange = (coins, amount) => {
  coins.sort((a, b) => a - b );
  let ans = Infinity;
  // 优先从面值比较大的值开始搜索
  dfs(coins, amount, 0, coins.length - 1);
  return ans === Infinity ? -1 : ans;


  function dfs(coins, amount, count, index) {

    if (index < 0 || count + Math.floor(amount / coins[index]) >= ans) {
      // 剪枝处理
      return;
    }

    if (amount % coins[index] === 0) {
      ans = Math.min(ans, count + Math.floor(amount / coins[index]));
      return;
    }

    for (let i = Math.floor(amount / coins[index]); i >= 0; i--) {
      dfs(coins, amount - i * coins[index], count + i, index - 1)
    }
  }
}