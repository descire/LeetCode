# [718. Maximum Length of Repeated Subarray](https://leetcode.com/problems/maximum-length-of-repeated-subarray/)

### 一、解题思路

  &emsp;&emsp;对于这种求解极值的题目，通过都可以采用动态规划来解决。

  &emsp;&emsp;定义状态：

```s
  dp[i][j]表示A中前i个元素与B中前j个元素形成的最长重复字符串的长度。
```

  &emsp;&emsp;边界状态：

```s
  dp[i][0] = 0
  dp[0][j] = 0
```

  &emsp;&emsp;特别需要注意字符串的下标与状态存储空间下标之间的关系。

  &emsp;&emsp;状态转移方程：

```s
  dp[i][j] = (A[i - 1] === B[j - 1] ? dp[i - 1][j - 1] + 1 : 0)
```

### 二、代码实现

```JavaScript
const findLength = (A, B) => {
  const l1 = A.length
  const l2 = B.length
  if (l1 === 0 || l2 === 0) {
    return 0
  }

  const dp = []

  let ans = 0

  for (let i = 0; i <= l1; i++) {
    dp[i] = []
    for (let j = 0; j <= l2; j++) {
      if (i === 0 || j === 0) {
        dp[i][j] = 0
      } else {
        dp[i][j] = (A[i - 1] === B[j - 1] ? dp[i - 1][j - 1] + 1 : 0)
        ans = Math.max(dp[i][j], ans)
      }
    }
  }
  return ans
}
```