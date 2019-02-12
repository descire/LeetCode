# [968. Binary Tree Cameras](https://leetcode.com/problems/binary-tree-cameras/)

### 一、解题思路

  &emsp;&emsp;本质上还是采用递归遍历二叉树的方式，但是需要在递归的过程中返回二叉树中各个节点的状态：

  - 0 表示该节点未被覆盖
  - 1 表示该节点被覆盖
  - 2 表示该节点放置摄像头

  &emsp;&emsp;根据这些状态即可确定当前节点是否应该放置摄像头。

### 二、代码实现

```JavaScript
const minCameraCover = root => {
  let ans = 0

  if (help(root) === 0) {
    // 仅有一个根节点
    ans++
  }
  return ans

  // 如何标记当前节点的状态
  // 0 表示未被覆盖 1 表示被覆盖 2 表示有摄像头
  function help (root) {
    if (!root) {
      return 1
    }
    const l = help(root.left)
    const r = help(root.right)

    if (l === 0 || r === 0) {
      ans++
      return 2
    }
    if (l === 2 || r === 2) {
      return 1
    }

    return 0
  }
}
```