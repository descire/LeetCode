/**
 * https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/
 * 
 * 122. Best Time to Buy and Sell Stock II
 * 
 * Easy
 * 
 */
const maxProfit = prices => {
  const max = prices.length
  if (max < 2) {
    return 0
  }

  const sell = [0] // 当前获取的最大收益
  const hold = [-prices[0]] // 当前持有的最大收益

  for (let i = 1; i < max; i++) {
    const price = prices[i]
    sell[i] = Math.max(sell[i - 1], hold[i - 1] + price)
    hold[i] = Math.max(hold[i - 1], sell[i - 1] - price)
  }

  return sell[max - 1]
}