# [838. Push Dominoes](https://leetcode.com/problems/push-dominoes/)

### 一、解题思路

  &emsp;&emsp;解决这道题的关键在于理解：两个距离最近的沿某个方向推到的多米诺骨牌决定该区间内其它多米诺骨牌的倒向。

  &emsp;&emsp;而这样的区间有以下几种情况：

  - L...L 结果为 LLLLL。
  - R...R 结果为 RRRRR。
  - L...R 结果为 L...R。
  - R...L 结果为 RR.LL。
  - R..L 结果为 RRLL。

  &emsp;&emsp;那么利用双指针就可以不断的处理这样的区间，但是对于条件多米诺骨牌不存在开始与结束位置时，还需要单独处理头部区间和尾部区间的情况。

  &emsp;&emsp;对于上述情况，可以通过分别向字符串中头部插入'L'和尾部插入'R'来处理所有区间，并且不影响统计的结果。

### 二、代码实现

```JavaScript
const pushDominoes = dominoes => {
  dominoes = 'L' + dominoes + 'R'
  let ans = ''
  for (let i = 0, j = 1, max = dominoes.length; j < max; j++) {
    if (dominoes[j] === '.') {
      continue
    }
    const middle = j - i - 1

    if (i > 0) {
      ans += dominoes[i]
    }
    if (dominoes[i] === dominoes[j]) {
      ans += dominoes[i].repeat(middle)
    } else if (dominoes[i] === 'L' && dominoes[j] === 'R') {
      ans += '.'.repeat(middle)
    } else {
      ans += 'R'.repeat(middle / 2) + '.'.repeat(middle % 2) + 'L'.repeat(middle / 2)
    }

    i = j
  }
  return ans
}
```