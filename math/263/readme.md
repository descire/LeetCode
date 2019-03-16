# [263. Ugly Number](https://leetcode.com/problems/ugly-number/)

### 一、解题思路

  &emsp;&emsp;简单的取模运算的应用。

### 二、代码实现

```JavaScript
const isUgly = num => {
  if (num < 1) {
    return false
  }
  while (num !== 1) {
    if (num % 2 === 0) {
      num /= 2
      continue
    }
    if (num % 3 === 0) {
      num /= 3
      continue
    }
    if (num % 5 === 0) {
      num /= 5
      continue
    }
    return false
  }

  return true
}
```