# [279. Perfect Squares](https://leetcode.com/problems/perfect-squares/)

### 一、解题思路

  &emsp;&emsp;这是一道典型的动态规划题目（不要求求解具体的方案）。

  &emsp;&emsp;定义状态：

```s
  dp[i]表示完全平方数组成i最少的个数
```

  &emsp;&emsp;边界情况：

```s
  dp[i] = 1
```

  &emsp;&emsp;状态转移方程：

```s
  if k * k = i 
    dp[i] = 1
  else
    dp[i] = Math.min(dp[i], dp[i - j] + dp[j])
```

  &emsp;&emsp;由于在dp[i - j] + dp[j]中产生大量重复运算，只需要计算i/2即可：

```JavaScript
const numSquares = n => {
  const dp = new Array(n + 1).fill(Number.MAX_SAFE_INTEGER)
  dp[1] = 1
  for (let i = 2; i <= n; i++) {
    const s = Math.floor(Math.sqrt(i))
    for (let j = i - 1; j >= Math.floor(i / 2); j--) {
      if (Math.pow(s, 2) === i) {
        dp[i] = 1
      }
      dp[i] = Math.min(dp[j] + dp[i - j], dp[i])
    }
  }
  return dp[n]
}
```

  &emsp;&emsp;再来思考一下上述状态转移方程，你会发现当一个数不是完全平方数时，必须去找一个能组成其和的最大完全平方数，才能确保其个数最少，那么实际上状态转移方程又可以优化为：

```s
  if k * k = i
    dp[i] = 1
  else
    dp[i + j * j] = Math.min(dp[i + j * j], dp[i] + 1)
```

### 二、代码实现

```JavaScript
const numSquares = n => {
  const dp = new Array(n + 1).fill(Number.MAX_SAFE_INTEGER)

  for (let i = 1; i * i <= n; i++) {
    dp[i * i] = 1
  }

  for (let i = 1; i < n; i++) {
    for (let j = 1; i + j * j <= n; j++) {
      dp[i + j * j] = Math.min(dp[i] + 1, dp[i + j * j])
    }
  }

  return dp[n]
}
```