# [121. Best Time to Buy and Sell Stock](https://leetcode.com/problems/best-time-to-buy-and-sell-stock/)

### 一、解题思路

  &emsp;&emsp;本题要求求出交易一次所获取的最大收益，一次交易定义为：先购买再卖出。

  &emsp;&emsp;采用动态规划的方式处理该问题，需要定义两个状态：

```s
  min[i]表示i之前股票的最小价值
  max[i]表示i之后股票的最大价值
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

### 二、代码实现

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