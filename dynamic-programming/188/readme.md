# [188. Best Time to Buy and Sell Stock IV](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iv/)

### 一、解题思路

  &emsp;&emsp;这道题同样也是股票交易的题目，它规定至多交易K次所能产生的最大收益，接下来通过动态规划解决这道题目。

  &emsp;&emsp;定义状态：

```s
  dp[k][i]表示k次交易在第i天产生的最大收益
```

  &emsp;&emsp;边界状态：

  - 当k=0时，自然不会产生任何收益。
  - 当i=0和i=1时，发生不了交易操作，同样也不会产生收益。

  &emsp;&emsp;在定义状态的过程中特别需要注意下标的意义，这里i=1才表示prices[0]。

```s
  dp[0][i] = 0
  dp[k][0] = 0
```

  &emsp;&emsp;状态转移方程:

```s
  
  条件 j ∈ [1, i)

  dp[k][i] = Math.max(dp[k][i - 1], prices[i - 1] - prices[j - 1] + dp[k - 1][j])
              
```

  &emsp;&emsp;下面为代码实现：

```JavaScript
const maxProfit = (k, prices) => {
  const max = prices.length
  if (max < 2) {
    return 0
  }

  const dp = []
  
  // 初始状态
  for (let i = 0; i <= k; i++) {
    dp[i] = [0, 0]
    if (i === 0) {
      for (let j = 0; j <= max; j++) {
        dp[i][j] = 0
      }
    }
  }

  for (let i = 1; i <= k; i++) {
    for (let j = 2; j <= max; j++) {
      let max = dp[i][j - 1]

      for (let n = 1; n < j; n++) {
        max = Math.max(max, prices[j - 1] - prices[n - 1] + dp[i - 1][n])
      }

      dp[i][j] = max
    }
  }

  return dp[k][max]
}
```

  &emsp;&emsp;但是上述代码的时间复杂度为O(n^3)，再看看如何优化？

  &emsp;&emsp;以求解dp[3][4]为例：

```s
  dp[3][3] # 不进行交易

  # 前今天进行交易的结果
  prices[3] - prices[2] + dp[2][3]
  prices[3] - prices[1] + dp[2][2]
  prices[3] - prices[0] + dp[2][1]
```

  &emsp;&emsp;dp[3][4]的值需要从上述情况中找出最大值，而对于求前j天进行交易对于每一次第i天都需要重复计算，这里可以将这个二维循环转化为一维循环：

```JavaScript
const maxProfit = (k, prices) => {
  const max = prices.length
  if (max < 2) {
    return 0
  }

  const dp = []
  
  // 初始状态
  for (let i = 0; i <= k; i++) {
    dp[i] = [0, 0]
    if (i === 0) {
      for (let j = 0; j < max; j++) {
        dp[i][j] = 0
      }
    }
  }
  for (let i = 1; i <= k; i++) {
    let maxDiff = Number.MIN_SAFE_INTEGER 
    for (let j = 2; j <= max; j++) {
      let max = dp[i][j - 1]

      maxDiff = Math.max(maxDiff, dp[i - 1][j - 1] - prices[j - 2])

      max = Math.max(max, prices[j - 1] + maxDiff)

      dp[i][j] = max
    }
  }
  return dp[k][max]
}

```

  &emsp;&emsp;这样时间复杂度被优化为O(n^2)，再看一下空间复杂度有优化的空间吗？由状态转移方程可见dp[k][j]最多只会用到dp[k - 1][*]的状态，所以完全可以将二维空间转化为一维空间。

  &emsp;&emsp;由于测试用例对于该问题的时间复杂度检测的非常严格，这里还需要考虑当k>=max/2时，采用【122. Best Time to Buy and Sell Stock II】中O(n)的解法，下面给出最终的解法，慢慢体会吧。

### 二、代码实现

```JavaScript
const maxProfit = (k, prices) => {
  const max = prices.length
  if (max < 2) {
    return 0
  }

  if (k >= max / 2) {
    return help(prices, max)
  }

  let dp = []
  
  // 初始状态
  for (let i = 0; i <= max; i++) {
    dp[i] = 0
  }
  for (let i = 1; i <= k; i++) {
    let maxDiff = Number.MIN_SAFE_INTEGER
    let temp = [0, 0]
    for (let j = 2; j <= max; j++) {
      let max = temp[j - 1]

      maxDiff = Math.max(maxDiff, dp[j - 1] - prices[j - 2])

      max = Math.max(max, prices[j - 1] + maxDiff)

      temp[j] = max
    }
    dp = temp
  }
  return dp[max]

  function help (prices, max) {
    const hold = [-prices[0]]
    const sell = [0]

    for (let i = 1; i < max; i++) {
      sell[i] = Math.max(sell[i - 1], hold[i - 1] + prices[i])
      hold[i] = Math.max(hold[i - 1], sell[i - 1] - prices[i])
    }
    return sell[max - 1]
  }
}
```