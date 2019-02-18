# [122. Best Time to Buy and Sell Stock II](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/)

### 一、解题思路

  &emsp;&emsp;相比较【121. Best Time to Buy and Sell Stock】，本道题允许多次交易，本质上就是买进和卖出两种操作的多次切换。

  &emsp;&emsp;那么可以这样定义状态：

```s
  hold[i]表示第i天所持有的最大价值
  sell[i]表示第i天出售所产生的最大价值
```

  &emsp;&emsp;这两种状态分别对应买进和卖出两种操作所产生的状态：

  - 买进时，所持有的最大价值(hold[i])需要减去当前股票的价值。
  - 卖出时，出售所产生的最大价值(sell[i])需要加上当前股票的价值。

  &emsp;&emsp;边界状态为：

```s
  hold[0] = -price[0]
  sell[0] = 0
```

  &emsp;&emsp;由于求解的是最大值，所以在每一次状态变化的时候需要考虑当前是否需要买进或者卖出，即状态转移方程为：

```JavaScript
  sell[i] = Math.max(sell[i - 1], hold[i - 1] + prices[i])
  hold[i] = Math.max(hold[i - 1], sell[i - 1] - prices[i])
```

### 二、代码实现

```JavaScript
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
```