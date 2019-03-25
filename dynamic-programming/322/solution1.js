/**
 * https://leetcode.com/problems/coin-change/
 * 
 * 322. Coin Change
 * 
 * Medium
 * 
 * dfs + HashMap
 */
const coinChange = (coins, amount) => {
  const max = coins.length
  if (!max) {
    return -1
  }
  if (amount === 0) {
    return 0
  }

  coins.sort((a, b) => a - b) // 排序

  let ans = Number.MAX_SAFE_INTEGER
  dfs(0, amount, 0)
  return (ans === Number.MAX_SAFE_INTEGER ? -1 : ans)
  function dfs (currentIndex, amount, count) {
    count++
    for (let i = currentIndex; i < max; i++) {
      const coin = coins[i]
      if (amount > coin) {
        dfs(i, amount - coins[i], count)
      } else if (amount === coin) {
        ans = Math.min(count, ans)
        return
      } else {
        return
      }
    }
  }
}