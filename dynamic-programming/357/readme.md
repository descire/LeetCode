# [357. Count Numbers with Unique Digits](https://leetcode.com/problems/count-numbers-with-unique-digits/)

### 一、解题思路

  &emsp;&emsp;这道题是一道正儿八经的数学题，1位数不存在重复数字的情况：

```s
  dp[1] = 10
```

  &emsp;&emsp;2位数不出现重复数字的问题实际上就是求解：10个数字中取2个数字的排列问题，因为0不能作为首位，需要减去9种0为首部的情况，即

```s
  10! / 8! - 9 = 9 * 9
```

  &emsp;&emsp;那么3位数不存在重复数字的情况为：

```s
  10! / 7! - 8 * 9 = 9 * 9 * 8
```

  &emsp;&emsp;最后得出通项公式：

```s
  dp[k] = 9 * 9 * .... * (9 - k + 2) 
```

  &emsp;&emsp;最终代码如下：

### 二、代码实现

```JavaScript
const countNumbersWithUniqueDigits = n => {
  if (n == 0) {
    return 1
  }
  let ans = 10, base = 9
  for (let i = 2; i <= Math.min(10, n); i++) {
    base = base * (9 - i + 2)
    ans += base
  }
  return ans
}
```