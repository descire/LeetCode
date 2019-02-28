# [740. Delete and Earn](https://leetcode.com/problems/delete-and-earn/)

### 一、解题思路

  &emsp;&emsp;最容易想到的思路就是通过DFS找出所有的得分方法，然后比较得出最大的得分：

```JavaScript
const deleteAndEarn = nums => {
  let ans = 0
  dfs(nums, 0)
  return ans
  function dfs (nums, sum) {
    const max = nums.length
    if (max === 0) {
      ans = Math.max(sum, ans)
      return
    }

    for (let i = 0; i < max; i++) {
      dfs(getNewArray(nums, nums[i], i), sum + nums[i])
    }
  }
}

function getNewArray (nums, target, index) {
  const result = []
  for (let i = 0, max = nums.length; i < max; i++) {
    const item = nums[i]
    if (i !== index && item != target - 1 && item !== target + 1) {
      result.push(item)
    }
  }
  return result
}
```

  &emsp;&emsp;由于题目中给定数组的最大长度为20000，所以这种最坏情况为O(n^2)的算法是不可能通过的。

  &emsp;&emsp;这里需要注意到数组中元素的范围为[1, 10000]，相比较数组的长度来看，这一维度相对较小，那么可以通过构建新数组的方式解决本题。

  &emsp;&emsp;首先记录数组中各个元素出现的次数（cache），以及元素的最大值，以下面的数组为例：

```s
  nums = [3, 4, 2]

  构建的新数组
  nums = [1, 2, 3, 4]
```

  &emsp;&emsp;对于转化过的数组，问题就变得简单多了，也就是不能拿相邻的元素并且前后状态可以递推起来，定义状态：

```s
  dp[j]表示从1到j值所获取的最大分数。
```

  &emsp;&emsp;边界状态：

```s
  dp[0] = 0
  dp[1] = 1 * cache[1]
```

  &emsp;&emsp;状态转移方程：

```s
  dp[i] = Math.max(dp[i - 1], dp[i - 2] + i * (cache[i] || 0))
```

### 二、代码实现

```JavaScript
const deleteAndEarn = nums => {
  const cache = {}
  const max = nums.length

  if (max === 0) {
    return 0
  }

  let maxNumber = Number.MIN_SAFE_INTEGER
  for (let i = 0; i < max; i++) {
    const item = nums[i]
    maxNumber = Math.max(maxNumber, item)
    cache[item] || (cache[item] = 0)
    cache[item]++
  }

  const dp = []
  dp[0] = 0
  if (cache[1]) {
    dp[1] = 1 * cache[1]
  } else {
    dp[1] = 0
  }
  for (let i = 2; i <= maxNumber; i++) {
    dp[i] = Math.max(dp[i - 1], dp[i - 2] + i * (cache[i] || 0))
  }
  return dp[maxNumber]
}
```