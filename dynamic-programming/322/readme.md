# [322. Coin Change](https://leetcode.com/problems/coin-change/)

### 一、解题思路

  &emsp;&emsp;这也是一道典型的动态规划题目，定义状态：

```s
  dp[i][j]表示前 i 个硬币可以形成和值 j 所需要的最小硬币数。
```

  &emsp;&emsp;边界状态：

```s
  dp[i][0] 形成和值为 0 所需要的硬币数为 0
```

  &emsp;&emsp;状态转移方程：

```s
  dp[i][j] = Math.min(dp[i][j], dp[i][j - coin] + 1 || Number.MAX_SAFE_INTEGER, dp[i - 1][j])
```

### 二、代码实现

```JavaScript
const coinChange = (coins, amount) => {
  const max = coins.length
  if (!max) {
    return -1
  }
  const dp = new Array(max + 1)
  dp[0] = new Array(amount + 1).fill(Number.MAX_SAFE_INTEGER)
  dp[0][0] = 0

  for (let i = 1; i <= max; i++) {
    dp[i] = new Array(amount + 1).fill(Number.MAX_SAFE_INTEGER)
    dp[i][0] = 0
    const coin = coins[i - 1]
    for (let j = 1; j <= amount; j++) {
      dp[i][j] = Math.min(dp[i][j], dp[i][j - coin] + 1 || Number.MAX_SAFE_INTEGER, dp[i - 1][j])
    }
  }

  return (dp[max][amount] === Number.MAX_SAFE_INTEGER ? -1 : dp[max][amount])
}
```