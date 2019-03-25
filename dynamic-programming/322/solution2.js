/**
 * https://leetcode.com/problems/coin-change/
 * 
 * 322. Coin Change
 * 
 * Medium
 * 
 * bfs 超出内存
 * 
 * dp
 */
const coinChange = (coins, amount) => {
  const max = coins.length
  if (!max) {
    return -1
  }
  if (amount === 0) {
    return 0
  }
}