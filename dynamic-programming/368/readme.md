# [368. Largest Divisible Subset](https://leetcode.com/problems/largest-divisible-subset/)

### 一、解题思路

  &emsp;&emsp;如果这道题目让我们求解最长整除序列的长度，那么大家一定会想到动态规划的方式。

  &emsp;&emsp;首先我们先将这个问题转化成求解最长整除序列长度的问题，那么可以定义状态：

```s
  dp[i]表示以i结尾的最长整除序列的长度
```

  &emsp;&emsp;状态转移方程：

```s
  if nums[i] % nums[j] === 0
    dp[i] = Math.max(dp[i], dp[j] + 1)
  else
    dp[i] = 1
```

  &emsp;&emsp;要满足这样的递推过程，首先需要对给定数组进行排序。

  &emsp;&emsp;接下来只要在上述动态规划的求解过程中记录以每个下标结尾所产生的最长整除序列即可，最后再筛选出整体最长的整除序列。

### 二、代码实现

```JavaScript
const largestDivisibleSubset = nums => {
  const max = nums.length
  if (max === 0) {
    return []
  }
  if (max === 1) {
    return [nums[0]]
  }

  nums.sort((a, b) => a - b)

  const dp = [1]
  const map = new Map()
  map.set(0, [nums[0]])

  for (let i = 1; i < max; i++) {
    const targetEl = nums[i]
    dp[i] = 1
    map.set(i, [targetEl])
    for (let j = i - 1; j >= 0; j--) {
      const preEl = nums[j]
      if (targetEl % preEl === 0) {
        const total = dp[j] + 1
        if (total > dp[i]) {
          dp[i] = total
          map.set(i, map.get(j).concat(targetEl))
        }
      }
    }
  }
  let maxSize = Number.MIN_SAFE_INTEGER
  let result = null
  for (let [key, ans] of map) {
    const len = ans.length
    if (len > maxSize) {
      maxSize = len
      result = ans
    }
  }
  return result
}
```