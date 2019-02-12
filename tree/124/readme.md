# [124. Binary Tree Maximum Path Sum](https://leetcode.com/problems/binary-tree-maximum-path-sum/)

### 一、解题思路

  &emsp;&emsp;本质上还是采用递归遍历二叉树的方法，因为题目要求最终给出最大路径和，那么在递归的过程中需要向上返回当前节点的最大路径值。（该路径是不能同时包含左右子树的）

  &emsp;&emsp;对于当前节点向上返回的最大路径分为以下几种情况：

  - 根节点
  - 根节点 + 左子树
  - 根节点 + 右子树

  &emsp;&emsp;那么对于当前子树的最大路径值可由以下几种情况产生：

  - 左子树
  - 右子树
  - 左子树 + 右子树 + 根节点
  - 根节点
  - 根节点 + 左子树
  - 根节点 + 右子树


### 二、代码实现

```JavaScript
const maxPathSum = root => {
  let ans = Number.MIN_SAFE_INTEGER
  help(root)
  return ans

  function help (root) {
    if (!root) {
      return Number.MIN_SAFE_INTEGER
    }
    const rv = root.val
    const lMax = help(root.left)
    const rMax = help(root.right)

    const currentSum = Math.max.call(null, rv, rv + lMax, rv + rMax)
    ans = Math.max.call(null, ans, currentSum, lMax, rMax, rv + rMax + lMax)

    return currentSum
  }
}
```


