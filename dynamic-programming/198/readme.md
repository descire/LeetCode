# [198. House Robber](https://leetcode.com/problems/house-robber/)

### 一、解题思路

  &emsp;&emsp;定义状态：

```s
  dp[i]表示第i个房屋可以抢劫的最大金额
```

  &emsp;&emsp;边界条件：

```s
  dp[0] = 0
  dp[1] = nums[1]
```

  &emsp;&emsp;题目中说明不能同时抢劫相邻的房屋，那么对于任一房屋则有以下两种情况：

  - 如果前一个房屋被抢，那么当前房屋不能抢。
  - 如果前一个房屋未被抢，那么当前房屋可以抢。

  &emsp;&emsp;那么状态转移方程为:

```s
  dp[i + 1] = Math.max(dp[i], dp[i - 1] + nums[i])  i ∈ [1, nums.length)
```

### 二、代码实现

```JavaScript
const rob = nums => {
  const max = nums.length
  if (!max) {
    return 0
  }
  
  const dp = new Array(max + 1).fill(0)

  dp[1] = nums[0]

  for (let i = 1; i < max; i++) {
    const money = nums[i]
    dp[i + 1] = Math.max(dp[i], dp[i - 1] + money)
  }
  return dp[max]
}
```