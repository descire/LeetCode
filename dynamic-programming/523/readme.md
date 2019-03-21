# [523. Continuous Subarray Sum](https://leetcode.com/problems/continuous-subarray-sum/)

### 一、解题思路

  &emsp;&emsp;这道题目比较简单，依次验证以每个元素为起点的子数组是否满足条件即可：

### 二、代码实现

```JavaScript
const checkSubarraySum = (nums, k) => {

  for (let i = 0, max = nums.length; i < max; i++) {
    let sum = nums[i]
    for (let j = i + 1; j < max; j++) {
      sum += nums[j]
      if (sum === k) {
        return true
      }
      if (k !== 0 && sum % k === 0) {
        return true
      }
    }
  }

  return false
}
```