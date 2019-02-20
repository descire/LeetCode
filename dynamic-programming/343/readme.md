# [343. Integer Break](https://leetcode.com/problems/integer-break/)

### 一、解题思路

  &emsp;&emsp;第一种方法采用动态规划的方式解决本题。

  &emsp;&emsp;定义状态：

```s
  dp[n]表示数字n分解之后所产生的最大乘积。
```

  &emsp;&emsp;下面从n=2开始分析：

  - n = 2，n只能拆成1+1，所以最大乘积为1*1，即dp[2] = 1。
  - n = 3, 这时情况就复杂了，它可以拆分成两种情况 1 + 1 + 1 和 1 + 2，但是这样很难帮助我们发现其中的玄机，需要这样的分析过程：

```s
  因为题目中要求至少被分割成两个数字

  首先会想到 3 = 1 + 2， 而对于2实际上又可以分解成 1 + 1， 前面已经求出dp[2] = 1

  dp[3] = Math.max(1 * dp[2], 1 * 2)

  所以得到dp[3] = 2
```

  - n = 4, 同样的分析过程

```s
  4 = 1 + 3

  dp[4] = Math.max(1 * dp[3], 1 * 3)

  4 = 2 + 2
  dp[4] = Math.max(dp[2] * dp[2], 2 * 2)

  即dp[4] = 4
```

  &emsp;&emsp;综上所述，可以得到状态转移公式为：

```s
  dp[i + j] = max(max(dp[i], i) * max(dp[j], j), dp[i + j])
```

  &emsp;&emsp;动态规划的实现代码为：

```JavaScript
const integerBreak = n => {
  const dp = new Array(n + 1).fill(1)

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i + 1; j++) {
      if (i + j <= n) {
        const x = Math.max(dp[i], i)
        const y = Math.max(dp[j], j)

        dp[i + j] = Math.max(x * y, dp[i + j])
      }
    }
  }
  return dp[n]
}
```

  &emsp;&emsp;如果列举很多n的结果之后，会发现当n足够大时，只要分解成3即可获取到最大乘积：

### 二、代码实现

```JavaScript
const integerBreak = n => {
  const map = [0, 0, 1, 2, 4, 6, 9]

  if (n === 2) {
    return 1
  }
  if (n === 3) {
    return 2
  }
  let ans = 1
  while (n > 6) {
    n -= 3
    ans *= 3
  }

  return ans * map[n]
}
```