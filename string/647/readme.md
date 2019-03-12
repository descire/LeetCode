# [647. Palindromic Substrings](https://leetcode.com/problems/palindromic-substrings/)

### 一、解题思路

  &emsp;&emsp;这道题要求求出字串为回文字符串的数量，可以选择动态规划解决。

  &emsp;&emsp;定义状态：

```s
  dp[i][j]表示下标i到下标j是否能够形成回文字符串
```

  &emsp;&emsp;那么对于任意一个i到j的字符串，能够形成回文字符串的条件为：

  - s[i] === s[j]
  - [i + 1, j - 1]也为回文字符串（注意起始坐标要大于结束坐标）

  &emsp;&emsp;实现代码如下：

### 二、代码实现

```JavaScript
const countSubstrings = s => {
  const max = s.length - 1

  const dp = []
  let ans = 0
  for (let i = max; i >= 0; i--) {
    dp[i] = []
    for (let j = i; j <= max; j++) {
      if (i === j) {
        dp[i][j] = true
        ans++
        continue
      }
      if (s[i] === s[j] && (j - i <= 1 ? true : dp[i + 1][j - 1])) {
        dp[i][j] = true
        ans++
      }
    }
  }

  return ans
}
```