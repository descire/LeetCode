# [873. Length of Longest Fibonacci Subsequence](https://leetcode.com/problems/length-of-longest-fibonacci-subsequence/)

### 一、解题思路

  &emsp;&emsp;本题要求找出数组中满足斐波拉契特点的最长序列，并且所给点的数组是一个递增数组，这一条件非常的重要。

  &emsp;&emsp;第一种方法：通过记录数组中元素存在的对象判断每两个数字能够形成的最长序列。

```JavaScript
const lenLongestFibSubseq = A => {
  const max = A.length
  if (max < 3) {
    return 0
  }

  const hash = {}

  for (let i = 0; i < max; i++) {
    hash[A[i]] = true
  }

  let ans = 0

  for (let i = 0; i < max - 1; i++) {
    for (let j = i + 1; j < max; j++) {
      ans = Math.max(ans, findFib(A[i], A[j]))
    }
  }
  return ans

  function findFib (a, b) {
    let size = 0
    let result = [a, b]
    while (hash[a + b]) {
      [a, b] = [b, a + b]
      size += size === 0 ? 3 : 1
    }
    return size
  }
}
```

  &emsp;&emsp;上述方法的时间复杂度为O(n^3),空间复杂度为O(n)。

  &emsp;&emsp;第二方法是采用动态规划来处理。

  &emsp;&emsp;定义状态：

```s
  dp[i][j]表示以第i个字符第j个字符结尾所形成序列的长度。
```

  &emsp;&emsp;当拥有i和j两个元素后，实际上就需要找出A[j]-A[i]是否存在于数组，并且它的下标应该小于i，所以状态转移方程为：

```s
  A[j] - A[i] === A[k] && A[k] in A && k < i
  ==> dp[i][j] = (dp[index][i] || 0) + 1
```

  &emsp;&emsp;这样时间复杂度为O(n^2)，并且空间复杂度也为O(n^2)，具体代码如下：


### 二、代码实现

```JavaScript
const lenLongestFibSubseq = A => {
  const max = A.length
  if (max < 3) {
    return 0
  }

  const cache = {}

  let dp = []
  let ans = 0
  // 记录每个数字的下标
  for (let i = 0; i < max; i++) {
    dp[i] = []
    cache[A[i]] = i
  }

  for (let i = 1; i < max - 1; i++) {
    for (let j = i + 1; j < max; j++) {
      const rest = A[j] - A[i]
      const index = cache[rest]
      if (index !== undefined && index < i) {
        dp[i][j] = (dp[index][i] || 0) + 1
        ans = Math.max(dp[i][j], ans)
      }
    }
  }

  return (ans === 0 ? ans : ans + 2)
}
```