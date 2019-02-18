/**
 * https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iii/
 * 
 * 123. Best Time to Buy and Sell Stock III
 * 
 * Hard
 */
const maxProfit = prices => {
  const max = prices.length
  if (max < 2) {
    return 0
  }
  
  // 第一次交易的状态
  const sell1 = [0]
  const hold1 = [-prices[0]]

  // 第二次交易状态
  const sell2 = [0]
  const hold2 = [-prices[0]]


  for (let i = 1; i < max; i++) {
    const price = prices[i]
    sell1[i] = Math.max(sell1[i - 1], hold1[i - 1] + price)
    hold1[i] = Math.max(hold1[i - 1], -price)

    sell2[i] = Math.max(sell2[i - 1], hold2[i - 1] + price)
    hold2[i] = Math.max(hold2[i - 1], sell1[i - 1] - price)
  }
  return sell2[max - 1]
}