# [264. Ugly Number II](https://leetcode.com/problems/ugly-number-ii/)

### 一、解题思路

  &emsp;&emsp;第一种思：采用暴力求解，主要由于题目中说明了最多只有1690个“丑数”，那么可以先求出所有的“丑数”，再排序得到第n个“丑数”。

```JavaScript
const nthUglyNumber = n => {
  const ans = []

  for (let a = 1; a < Number.MAX_SAFE_INTEGER; a *= 2) {
    for (let b = a; b < Number.MAX_SAFE_INTEGER; b *= 3) {
      for (let c = b; c < Number.MAX_SAFE_INTEGER; c *= 5) {
        ans.push(c)
      }
    }
  }

  ans.sort((a, b) => a - b)
  return ans[n - 1]
}
```

  &emsp;&emsp;上述代码虽然有一个三重循环，但是由于循环条件的特殊，时间复杂度并不会很高，它的时间复杂度主要由排序算法决定。

  &emsp;&emsp;那么可不可以只求出前n个“丑数”来解决这道题目？

  &emsp;&emsp;仔细观察上述方法输出的结果，你会发现每一个“丑数”都是在原有的基础上*2、*3或者*5推导出来的，那么就可以采用动态规划的方式解决这道题目，定义状态：

```s
  dp[i]表示第i个丑数
```

  &emsp;&emsp;状态转移方程：

```s
  dp[i] = Math.min(dp[x] * 2, dp[y] * 3, dp[z] * 5)
```

### 二、代码实现

```JavaScript
const nthUglyNumber = n => {
  const ans = [1]
   
  let x = 0
  let y = 0
  let z = 0

  for (let i = 1; i < n; i++) {
    let xNext = ans[x] * 2
    let yNext = ans[y] * 3
    let zNext = ans[z] * 5
    const min = Math.min(xNext, yNext, zNext)
    if (min === xNext) {
      x++
    }
    if (min === yNext) {
      y++
    }
    if (min === zNext) {
      z++
    }
    ans[i] = min
  }

  return ans[n - 1]
}
```