# [337. House Robber III](https://leetcode.com/problems/house-robber-iii/)

### 一、解题思路

  &emsp;&emsp;这道题目与【198. House Robber】类似，有意思的是它的数据结构换成了二叉树。

  &emsp;&emsp;对于二叉树的处理，通常采用递归方法，本题的递归处理方法如下：

```JavaScript
const rob = root => {
  if (!root) {
    return 0
  }

  const rv = root.val

  const ll = root.left ? rob(root.left.left) : 0
  const lr = root.left ? rob(root.left.right) : 0
  const rl = root.right ? rob(root.right.left) : 0
  const rr = root.right ? rob(root.right.right) : 0

  return Math.max(rv + ll + lr + rl + rr, rob(root.left) + rob(root.right))
}
```

  &emsp;&emsp;而在大部分的递归处理方法中，都会产生大量的重复子问题，对于这一点可以采用记忆化方法进行优化。

  &emsp;&emsp;本题中，可以在递归的过程中向上返回当前节点的两种状态：

  - 当前节点不被抢所产生的最大价值
  - 当前节点被抢所产生的最大价值

### 二、代码实现

```JavaScript
const rob = root => {
  const ans = robSub(root)
  return Math.max(ans[0], ans[1])

  function robSub (root) {
    if (!root) {
      return [0, 0]
    }
    const left = robSub(root.left)
    const right = robSub(root.right)

    const res = []

    // 根节点不抢
    res[0] = Math.max(left[0], left[1]) + Math.max(right[0], right[1])
    // 根节点抢
    res[1] = root.val + left[0] + right[0]

    return res
  }
}
```

