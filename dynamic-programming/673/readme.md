# [673. Number of Longest Increasing Subsequence](https://leetcode.com/problems/number-of-longest-increasing-subsequence/)

### 一、解题思路

  &emsp;&emsp;本道题是【300. Longest Increasing Subsequence】的一道进阶题，读者可以先看300题的解法。

  &emsp;&emsp;这道题目与300题的区别主要在于要求统计最长单调递增序列的个数，所以这里需要定义两个状态，第一个状态和300题一致：

```s
  dp[i]表示以下标i结尾的字符所形成单调递增序列中的最大长度
```

  &emsp;&emsp;接下来还需要定义一个状态来统计最长递增序列的个数：

```s
  amount[i]表示以下标i结尾的字符所形成最长单调递增序列的个数
```

  &emsp;&emsp;那么在计算最长单调递增序列的过程中，需要不断的更新当前最长单调递增序列的个数，状态转移方程为：

```s
                amount[j]              dp[j] + 1 > dp[i] 
  amount[i] =  
                amount[i] + amount[j]  dp[j] + 1 === dp[i]
```

### 二、代码实现

```JavaScript
const findNumberOfLIS = nums => {
  const max = nums.length
  let ans = 0
  if (max === 0) {
    return ans
  }

  const dp = new Array(max).fill(1) // 维护最长单调递增序列的长度

  const amount = new Array(max).fill(1) // 维护最大单调递增序列的个数
  for (let i = 0; i < max; i++) {
    const item = nums[i]
    for (let j = 0; j < i; j++) {
      const sub = nums[j]
      if (item > sub) {
        // 这个地方需要改造一下
        if (dp[j] + 1 > dp[i]) {
          dp[i] = dp[j] + 1
          amount[i] = amount[j]
        } else if (dp[j] + 1 === dp[i]) {
          amount[i] += amount[j]
        }
      }
    }
    ans = Math.max(ans, dp[i])
  }
  let sum = 0
  for (let i = 0; i < dp.length; i++) {
    if (dp[i] === ans) {
      sum += amount[i]
    }
  }
  return sum
}
```