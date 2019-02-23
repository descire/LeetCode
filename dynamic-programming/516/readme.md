# [516. Longest Palindromic Subsequence](https://leetcode.com/problems/longest-palindromic-subsequence/)

### 一、解题思路

  &emsp;&emsp;这是一道典型的动态规划题目。

  &emsp;&emsp;定义状态：

```s
  dp[i][j]表示第i个字符串到第j个字符串之间的最大回文序列。
```

  &emsp;&emsp;这里需要特别注意字符串的下标是从1开始的。边界状态：

```s
  dp[i][j] = 1 (i == j)
```

  &emsp;&emsp;状态转移方程：

```S
            dp[i + 1]dp[j - 1]  s[i] = s[j]
dp[i][j] =     
            max(dp[i + 1][j], dp[i][j - 1]) s[i] != s[j]
```

  &emsp;&emsp;代码如下：

```JavaScript
const longestPalindromeSubseq = s => {
  const max = s.length
  const dp = []
  for (let i = 0; i <= max; i++) {
    dp[i] = []
    for (let j = 0; j <= max; j++) {
      if (i === j) {
        dp[i][j] = 1
        continue
      }
      dp[i][j] = 0
    }
  }
  for (let j = 1; j <= max; j++) {
    for (let i = j - 1; i >= 1; i--) {
      if (s[i - 1] === s[j - 1]) {
        dp[i][j] = dp[i + 1][j - 1] + 2
      } else {
        dp[i][j] = Math.max(dp[i + 1][j], dp[i][j - 1])
      }
    }
  }
  return dp[1][max]
}
```

  &emsp;&emsp;再通过临时数组交换状态，可以将空间复杂度降低为O(n)：

### 二、 代码实现

```JavaScript
const longestPalindromeSubseq = s => {
  const max = s.length
  let dp = new Array(max + 1).fill(0)

  for (let i = max; i >= 1; i--) {
    let temp = new Array(max + 1).fill(0)
    temp[i] = 1
    for (let j = i + 1; j <= max; j++) {
      if (s[i - 1] === s[j - 1]) {
        temp[j] = dp[j - 1] + 2
      } else {
        temp[j] = Math.max(dp[j], temp[j - 1])
      }
    }
    dp = temp
  }
  return dp[max]
}
```