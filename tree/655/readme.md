# [655. Print Binary Tree](https://leetcode.com/problems/print-binary-tree/)

### 一、解题思路

  &emsp;&emsp;主要通过以下两个步骤解决：

  - 求出二叉树存储的二维空间
  - 二分填充相应节点的值

  &emsp;&emsp;对于第一点，本质是求解二叉树的高度问题。

  &emsp;&emsp;对于第二点，则是通过层级遍历 + 二分查找的方式，找到相应节点所在的位置。


### 二、代码实现

```JavaScript
const printTree = root => {
  const h = getHeight(root)

  const w = (1 << h) - 1

  const ans = []

  // 初始化
  for (let i = 0; i < h; i++) {
    ans[i] = []
    for (let j = 0; j < w; j++) {
      ans[i][j] = ""
    }
  }

  print(root, 0, 0, w - 1)

  return ans

  // 二分填充
  function print (root, height, start, end) {
    if (!root) {
      return
    }
    const mid = Math.floor((start + end) / 2)
    ans[height][mid] = String(root.val)
    print(root.left, height + 1, start, mid - 1)
    print(root.right, height + 1, mid + 1, end)
  }

  function getHeight (root) {
    if (!root) {
      return 0
    }
    return Math.max(getHeight(root.left), getHeight(root.right)) + 1
  }
}
```