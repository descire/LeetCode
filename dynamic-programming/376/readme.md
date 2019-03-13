# [376. Wiggle Subsequence](https://leetcode.com/problems/wiggle-subsequence/)

### 一、解题思路

  &emsp;&emsp;这是一道典型的动态规划题目，不过这道题目中通过一个状态很难求解。

  &emsp;&emsp;题目中摇摆序列实际上由两种状态决定：上升和下降。那么可以定义这两个状态：

```s
  up[i]表示以i结尾上升序列的长度。
  down[i]表示以j结尾下降序列的长度。
```

  &emsp;&emsp;那么当数组中只有一个元素时：

```s
  up[0] = 1
  down[0] = 1
```

  &emsp;&emsp;状态转移公式：

```s
  if nums[i] > nums[i - 1]:
    up[i] = down[i - 1] + 1; down[i] = down[i - 1]
  else if nums[i] < nums[i - 1]
    down[i] = up[i - 1] + 1; up[i] = up[i - 1]
  else
    down[i] = down[i - 1]; up[i] = up[i - 1]
```

### 二、代码实现

```JavaScript
const wiggleMaxLength = nums => {
  const max = nums.length
  if (max === 0) {
    return 0
  }
  if (max === 1) {
    return 1
  }

  const up = new Array(max).fill(1)
  const down = new Array(max).fill(1)

  for (let i = 1; i < max; i++) {
    const cur = nums[i]
    const pre = nums[i - 1]
    if (cur > pre) {
      up[i] = down[i - 1] + 1
      down[i] = down[i - 1]
      continue
    }
    if (cur < pre) {
      down[i] = up[i - 1] + 1
      up[i] = up[i - 1]
      continue
    }
    down[i] = down[i - 1]
    up[i] = up[i - 1]
  }

  return Math.max(down[max - 1], up[max - 1])
}
```