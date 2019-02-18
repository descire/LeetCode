# [121. Best Time to Buy and Sell Stock](https://leetcode.com/problems/best-time-to-buy-and-sell-stock/)

### 一、解题思路

  &emsp;&emsp;本题要求求出交易一次所获取的最大收益，一次交易定义为：先购买再卖出。

  &emsp;&emsp;采用动态规划的方式处理该问题，需要定义两个状态：

```s
  min[i]表示第i天股票的最小价值
  max[i]表示第i天之后股票的最大价值
```

  &emsp;&emsp;状态转移方程为：

```s

            Math.min(min[i - 1], prices[i]) i > 0
  min[i] = 
            prices[i]                       i === 0

            Math.max(max[j + 1], prices[j]) j < len - 1
  max[j] = 
            prices[j]                       j === len - 1

```

  &emsp;&emsp;接下来只要计算在各个时间点购买所产生的最大差值，即为最大收益。

```JavaScript
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
```

  &emsp;&emsp;以上是比较常规的思路，再深入理解这道题目，实际上就是执行两种操作：买入和卖出。

  - 执行买入操作时，会使减少当前收益，需要保证任意时间点该值的最大值。
  - 执行卖出操作时，所得收益为 当前收益+股票的价值，需要保证任意时间点该值为最大值。

  &emsp;&emsp;那么可以定义两个状态：

```s
  sell[i]表示第i天的最大收益
  hold[i]表示第i天持有的最大价值
```

  &emsp;&emsp;边界条件为：

```s
  sell[0] = 0
  hold[0] = [-prices[0]]
```

  &emsp;&emsp;那么状态转移方程为：

```s
  sell[i] = Math.max(sell[i - 1], hold[i - 1] + price)
  hold[i] = Math.max(hold[i - 1], -price)
```

### 二、代码实现

```JavaScript
const maxProfit = prices => {
  const max = prices.length
  if (max < 2) {
    return 0
  }

  const sell = [0]
  const hold = [-prices[0]]

  for (let i = 1; i < max; i++) {
    const price = prices[i]
    sell[i] = Math.max(sell[i - 1], hold[i - 1] + price)
    hold[i] = Math.max(hold[i - 1], -price)
  }
  return sell[max - 1]
}
```