/**
 * https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-transaction-fee/
 * 
 * 714. Best Time to Buy and Sell Stock with Transaction Fee
 * 
 * Medium
 */
const maxProfit = (prices, fee) => {
  const max = prices.length
  if (max < 2) {
    return 0
  }

  const sell = [0]
  const hold = [-prices[0]]

  for (let i = 1; i < max; i++) {
    const price = prices[i]
    sell[i] = Math.max(sell[i - 1], hold[i - 1] + price - fee)
    hold[i] = Math.max(hold[i - 1], sell[i - 1] - price)
  }
  return sell[max - 1]
}