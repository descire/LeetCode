# [413. Arithmetic Slices](https://leetcode.com/problems/arithmetic-slices/)

### 一、解题思路

  &emsp;&emsp;这是一道典型的动态规划题目，首先定义状态：

```s
  dp[i]表示以A[i]结尾的等差数列的个数。
```

  &emsp;&emsp;至少三个数才有可能形成一个等差数列，那么边界状态为：

```s
  dp[0] = 0
  dp[1] = 0
```

  &emsp;&emsp;状态转移方程：

```s
  如果 A[i] - A[i - 1] === A[i - 1] - A[i - 2]
  ===> dp[i] = dp[i - 1] + 1

  否则
  ===> dp[i] = 0
```

  &emsp;&emsp;实现代码为：

```JavaScript
const numberOfArithmeticSlices = A => {
  const max = A.length

  if (max <= 2) {
    return 0
  }

  const dp = [0, 0]
  let sum = 0

  for (let i = 2; i < max; i++) {
    if (A[i] - A[i - 1] === A[i - 1] - A[i - 2]) {
      dp[i] = dp[i - 1] + 1
    } else {
      dp[i] = 0
    }
    sum += dp[i]
  }
  return sum
}
```

  &emsp;&emsp;由于状态转移只与前一个状态有关系，那么可以将空间复杂度O(n)优化为O(1)：

### 二、代码实现

```JavaScript
const numberOfArithmeticSlices = A => {
  const max = A.length

  if (max <= 2) {
    return 0
  }

  let pre = 0
  let sum = 0

  for (let i = 2; i < max; i++) {
    if (A[i] - A[i - 1] === A[i - 1] - A[i - 2]) {
      pre += 1
    } else {
      pre = 0
    }
    sum += pre
  }
  return sum
}
```