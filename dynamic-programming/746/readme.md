# [746. Min Cost Climbing Stairs](https://leetcode.com/problems/min-cost-climbing-stairs/)

### 一、解题思路

  &emsp;&emsp;定义状态：

```s
  dp[i]表示第i阶的最小花费
```

  &emsp;&emsp;边界状态：

```s
  dp[0] = 0
  dp[1] = cost[0]
```

  &emsp;&emsp;本题中只会发生两种操作：爬1步台阶和爬2步台阶。那么状态转移方程为：

```s
  dp[i + 1] = Math.min(dp[i], dp[i - 1]) + cost[i] i ∈ [1, max)
```

  &emsp;&emsp;最终达成爬完楼梯的目标发生在dp[max]和dp[max-1]。


### 二、代码实现

```JavaScript
const minCostClimbingStairs = cost => {
  const max = cost.length
  if (max < 2) {
    return 0
  }

  const dp = [0, cost[0]]

  for (let i = 1; i < max; i++) {
    dp[i + 1] = Math.min(dp[i], dp[i - 1]) + cost[i]
  }
  return Math.min(dp[max], dp[max - 1])
}
```