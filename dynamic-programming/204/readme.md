# [204. Count Primes](https://leetcode.com/problems/count-primes/)

### 一、解题思路

  &emsp;&emsp;主要应用[埃拉托斯特尼筛法](https://zh.wikipedia.org/wiki/%E5%9F%83%E6%8B%89%E6%89%98%E6%96%AF%E7%89%B9%E5%B0%BC%E7%AD%9B%E6%B3%95)

  &emsp;&emsp;伪代码为：

```s
Input: an integer n > 1
 
Let A be an array of Boolean values, indexed by integers 2 to n,
initially all set to true.
 
 for i = 2, 3, 4, ..., not exceeding Math.sqrt(n)
  
  if A[i] is true:
    for j = i2, i2+i, i2+2i, i2+3i, ..., not exceeding n :
      A[j] := false
 
Output: all i such that A[i] is true.
```

### 二、代码实现

```JavaScript
const countPrimes = n => {
  if (n < 3) {
    return 0
  }
  const dp = new Array(n).fill(1)

  dp[0] = 0
  dp[1] = 0

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (!dp[i]) {
      continue
    }
    for (let j = i * i; j < n; j += i) {
      dp[j] = 0
    }
  }

  return dp.reduce((a, b) => a + b, 0)
}
```