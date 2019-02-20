# [638. Shopping Offers](https://leetcode.com/problems/shopping-offers/)

### 一、解题思路

```s
  price = [2,5]
  special = [[3,0,5],[1,2,10]]
  needs = [3,2]
```

  &emsp;&emsp;以上述条件为例，给定商品A和商品B的价格分别为2和5，并且商店还提供了两种套餐选择：

  - 花费5元，可以购买3件A商品。
  - 花费10元，可以购买1件A商品，2件B商品。

  &emsp;&emsp;现在要求正好买够3件A商品和2件B商品需要花费的最少金额。

  &emsp;&emsp;实际上，在生活中也会经常遇到这样的问题，优先考虑优惠套餐，然后再单买凑全。

  &emsp;&emsp;就如上述示例中，首先会先选择套餐1，也就是花5元买3件A商品，此时的问题就转化为了：

```s
  price = [2,5]
  special = [[3,0,5],[1,2,10]]
  needs = [0,2]
```

  &emsp;&emsp;所以这道题目可以采用递归来处理：

### 二、代码实现

```JavaScript
const shoppingOffers = (price, special, needs) => {
  const max = price.length
  if (!max) {
    return 0
  }
  let min = 0

  for (let i = 0; i < max; i++) {
    min += price[i] * needs[i]
  }

  for (let i = 0; i < special.length; i++) {
    const s = special[i]
    const len = s.length
    let m = s[len - 1]
    const newNeeds = needs.map((item, index) => {
      return item - s[index]
    })
    if (!checkAmount(newNeeds)) {
      continue
    }
    min = Math.min(shoppingOffers(price, special, newNeeds) + m, min)
  }
  return min  
}

function checkAmount (needs) {
  for (let i = 0; i < needs.length; i++) {
    if (needs[i] < 0) {
      return false
    }
  }
  return true
}
```

