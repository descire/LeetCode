# [70. Climbing Stairs](https://leetcode.com/problems/climbing-stairs/)

### 一、解题思路

  &emsp;&emsp;定义状态：

```s
  dp[i]表示爬到第i阶所用的方式总数
```

  &emsp;&emsp;边界状态：

```s
  dp[1] = 1
  dp[2] = 2
```

  &emsp;&emsp;之所以需要上述两个边界状态，是因为求解到达任意阶所需的方式总数问题可以转化为：求解爬1步到达该阶与爬2步到达该阶方式之和。那么状态转移方程为：

```s
  dp[i] = dp[i - 1] + dp[i - 2]   i >= 3
```

### 二、代码实现

```JavaScript
const climbStairs = n => {
  const dp = []

  dp[1] = 1
  dp[2] = 2
  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2]
  }
  return dp[n]
}
```