# [300. Longest Increasing Subsequence](https://leetcode.com/problems/longest-increasing-subsequence/)

### 一、解题思路

  &emsp;&emsp;这道题目与【674. Longest Continuous Increasing Subsequence】类似，最大的区别就是不要求元素连续，这就会导致以下标i结尾的字符会产生多条单调递增序列。

  &emsp;&emsp;那么可以这样定义状态：

```s
  dp[i]表示以下标i结尾的字符所形成单调递增序列中的最大长度
```

  &emsp;&emsp;对于以任一下标字符结尾都会产生一个只包含自身的最短单调递增序列，那么边界条件为：

```s
  dp[i] = 1   i ∈ [0, nums.length - 1]
```


  &emsp;&emsp;状态转移方程相比较674要复杂一点：

```s
  dp[i] = Math.max(dp[j] + 1, dp[i])    j ∈ [0, i - 1] and nums[i] > nums[j]
```

### 二、代码实现

```JavaScript
const lengthOfLIS = nums => {
  const len = nums.length
  let ans = 1
  if (len === 0) {
    return 0
  }
  const dp = new Array(len).fill(1)

  for (let i = 1; i < len; i++) {
    let item = nums[i]
    for (let j = i - 1; j >= 0; j--) {
      const pre = nums[j]
      if (pre < item) {
        dp[i] = Math.max(dp[j] + 1, dp[i])
      }
    }
    ans = Math.max(dp[i], ans)
  }
  return ans
}
```