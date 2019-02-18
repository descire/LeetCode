# [53. Maximum Subarray](https://leetcode.com/problems/maximum-subarray/)

### 一、解题思路

  &emsp;&emsp;定义状态：

```s
  dp[i]表示以第i个数结尾的最大连续子数组的和
```

  &emsp;&emsp;边界状态：

```s
  dp[0] = nums[0]
```

  &emsp;&emsp;转移方程为：

```s
  dp[i] = Math.max(dp[i - 1] + num, num)
```

  &emsp;&emsp;接下来只要找出dp[i]中的最大值即可。

### 二、代码实现

```JavaScript
const maxSubArray = nums => {
  const max = nums.length
  if (!max) {
    return 0
  }

  const dp = [nums[0]]
  if (max === 1) {
    return dp[0]
  }
  let ans = dp[0]

  for (let i = 1; i < max; i++) {
    const num = nums[i]
    dp[i] = Math.max(dp[i - 1] + num, num)
    ans = Math.max(ans, dp[i])
  }
  return ans
}
```