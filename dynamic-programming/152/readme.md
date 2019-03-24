# [152. Maximum Product Subarray](https://leetcode.com/problems/maximum-product-subarray/)

### 一、解题思路

  &emsp;&emsp;这是一道典型的动态规划题目，定义状态：

```s
  dp[i]表示第i个元素结尾的最大乘积
```

  &emsp;&emsp;那么确定dp[i]就需要向前枚举所有的值，找出最大值：

```s
  // sum为累计的乘积
  dp[i] = Math.max(dp[j - 1] * sum, dp[i], sum)
```

  &emsp;&emsp;具体实现为：

```JavaScript
const maxProduct = nums => {
  const max = nums.length
  if (!max) {
    return 0
  }
  const dp = [1, nums[0]]
  let ans = nums[0]
  for (let i = 2; i <= max; i++) {
    let sum = nums[i - 1]
    dp[i] = Math.max(dp[i - 1] * sum, sum)
    for (let j = i - 1; j >= 1; j--) {
      sum *= nums[j - 1]
      dp[i] = Math.max(dp[j - 1] * sum, dp[i], sum)
      ans = Math.max(ans, dp[i])
    }
  }
  return ans
}
```

  &emsp;&emsp;上述代码的时间复杂度为O(n^2)，通过不了测试用例。

  &emsp;&emsp;再深入思考前向寻找最大值的过程，主要由于乘积可能是负值，导致你不能错过一些负值的情况，那么这里可以采用定义两个状态来降低时间复杂度：

### 二、代码实现

```JavaScript
const maxProduct = nums => {
  const max = nums.length
  if (!max) {
    return 0
  }
  let minMul = nums[0]
  let maxMul = nums[0]
  let ans = nums[0]
  for (let i = 1; i < max; i++) {
    let a = minMul * nums[i]
    let b = maxMul * nums[i]
    maxMul = Math.max(a, b, nums[i])
    minMul = Math.min(a, b, nums[i])
    ans = Math.max(ans, maxMul)
  }
  return ans
}
```