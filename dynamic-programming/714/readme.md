# [714. Best Time to Buy and Sell Stock with Transaction Fee](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-transaction-fee/)

### 一、解题思路

  &emsp;&emsp;这道题目与【122. Best Time to Buy and Sell Stock II】的解法基本一样，只需要在执行卖出操作时，扣除手续费即可。

### 二、代码实现

```JavaScript
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
```