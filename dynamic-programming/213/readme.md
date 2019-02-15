# [213. House Robber II](https://leetcode.com/problems/house-robber-ii/)

### 一、解题思路

  &emsp;&emsp;本道题目是【198. House Robber】的变题，解法与它基本类似，唯一区别就在于本道题目中的房屋首尾是相邻，也就意味着首尾房屋不能同时抢劫，那么完全可以将这个问题分割成：

  - [0, nums.length - 2]房屋所产生的金额
  - [1, nums.length - 1]房屋所产生的金额

  &emsp;&emsp;取两种情况的最大值即可。

### 二、代码实现

```JavaScript
const rob = nums => {
  const max = nums.length
  if (max === 0) {
    return 0
  }
  if (max === 1) {
    return nums[0]
  }
  const pre = robSub(0, max - 2)
  const suf = robSub(1, max - 1)

  return Math.max(pre, suf)

  function robSub (start, end) {
    const len = end - start
    if (len === 0) {
      return nums[start]
    }

    const dp = new Array(len + 1).fill(0)
    let index = 0
    dp[++index] = nums[start]
    for (let i = start + 1; i <= end; i++) {
      dp[++index] = Math.max(dp[index - 1], dp[index - 2] + nums[i])
    }
    return dp[len + 1]
  }
}
```