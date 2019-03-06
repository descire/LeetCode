# [698. Partition to K Equal Sum Subsets](https://leetcode.com/problems/partition-to-k-equal-sum-subsets/)

### 一、解题思路

  &emsp;&emsp;利用DFS搜索算法判断是否能够组成k个和值为 sum / k 的集合，注意标记已访问的元素。

### 二、代码实现

```JavaScript
const canPartitionKSubsets = (nums, k) => {
  const sum = nums.reduce((x, y) => x + y, 0)
  if (sum % k !== 0) {
    return false
  }

  const subSum = sum / k

  nums.sort((a, b) => a - b)

  const cache = new Array(nums.length)

  return dfs(nums, k, subSum, 0, 0)

  function dfs (nums, k, target, curSum, startIndex) {
    if (k === 1) {
      return true
    }
    if (curSum === target) {
      return dfs(nums, k - 1, target, 0, 0)
    }
    for (let i = startIndex; i < nums.length; i++) {
      const item = nums[i]
      if (cache[i]) {
        continue
      }
      if (curSum + item  <= target) {
        cache[i] = true
        if (dfs(nums, k, target, curSum + item, i + 1)) {
          return true
        }
        cache[i] = false
      } else {
        break
      }
    }
    return false
  }
}
```