# [120. Triangle](https://leetcode.com/problems/triangle/)

### 一、解题思路

  &emsp;&emsp;典型的动态规划题型。

  &emsp;&emsp;定义状态：

```s
  dp[i][j]表示第i行第j列的最小和值。
```

  &emsp;&emsp;状态转移方程：

```s
  dp[i][j] = Math.min(dp[i + 1][j], dp[i + 1][j + 1]) + item[j]
```

### 二、代码实现

```JavaScript
const minimumTotal = triangle => {
  const max = triangle.length
  if (max === 0) {
    return 0
  }
  const dp = new Array(max)
  for (let i = max - 1; i >= 0; i--) {
    dp[i] = []
    const item = triangle[i]
    const len = item.length
    for (let j = 0; j < len; j++) {
      if (i === max - 1) {
        dp[i][j] = item[j]
      } else {
        dp[i][j] = Math.min(dp[i + 1][j], dp[i + 1][j + 1]) + item[j]
      }
    }
  }

  return dp[0][0]
}
```