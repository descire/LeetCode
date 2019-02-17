/**
 * https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
 * 
 * 121. Best Time to Buy and Sell Stock
 * 
 */
const maxProfit = prices => {
  const len = prices.length
  if (len < 2) {
    return 0
  }

  const min = [prices[0]]

  const max = []
  max[len - 1] = prices[len - 1]

  for (let i = 1; i < len; i++) {
    min[i] = Math.min(min[i - 1], prices[i])
    max[len - i - 1] = Math.max(max[len - i], prices[len - 1 - i])
  }
  // 找出最大差值
  let ans = 0
  for (let i = 0; i < len; i++) {
    ans = Math.max(ans, max[i] - min[i])
  }
  return ans
}

console.log(maxProfit([7,1,5,3,6,4]))
console.log(maxProfit([1, 2]))