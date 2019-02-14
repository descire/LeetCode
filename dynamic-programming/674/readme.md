# [674. Longest Continuous Increasing Subsequence](https://leetcode.com/problems/longest-continuous-increasing-subsequence/)

### 一、解题思路

  &emsp;&emsp;这是一道典型的动态规划题目。

  &emsp;&emsp;而解决动态规划类型的题目，通常需要以下三个步骤：

  - 定义状态
  - 边界状态
  - 状态转移方程

  &emsp;&emsp;本题要求求出最大的连续单调递增序列的长度，而在给定的数组中存在多个连续单调递增序列，所以解决这个问题需要先找出所有连续单调递增序列的长度，然后找出最大值。

  &emsp;&emsp;上述看似很简单的分析过程，有助于定义状态：

```s
  dp[i] 表示以下标为i的字符结尾的连续单调递增序列的长度
```

  &emsp;&emsp;本题没有边界状态。

  &emsp;&emsp;接下来的状态转移方程则是解决动态规划问题的核心。

  &emsp;&emsp;以数组nums = [1,3,5,4,7]为例，分析步骤为：

  - i = 0: dp[0] = 1
  - i = 1: 这时需要比较nums[1]与nums[0]的大小,从而判断是否能构成连续单调递增序列，此时nums[1] > nums[0], 那么dp[1] = dp[0] + 1，即dp[1] = 2
  - i = 2: dp[2] = 3
  - i = 3: 此时nums[3] < nums[2]，那么nums[3]无法与之前的数构成连续单调递增序列，即dp[3] = 1
  - ...

  &emsp;&emsp;综上所述，可以发现本题的状态转移方程为:

```s
              1               nums[i] <= nums[i - 1]
    dp[i] =
              dp[i - 1] + 1   nums[i] > nums[i - 1]
```

### 二、代码实现

```JavaScript
const findLengthOfLCIS = nums => {
  const max = nums.length
  let ans = 0
  if (max === 0) {
    return ans
  }
  ans = 1
  if (max === 1) {
    return ans
  }

  let current = 1 // 当前递增序列的长度
  let preItem = nums[0] // 前一个元素

  for (let i = 1; i < max; i++) {
    const item = nums[i]
    if (item > preItem) {
      current++
    } else {
      current = 1
    }
    preItem = item
    ans = Math.max(ans, current)
  }
  return ans
}
```