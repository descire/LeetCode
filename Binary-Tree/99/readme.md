# [99. Recover Binary Search Tree](https://leetcode.com/problems/recover-binary-search-tree/)

### 一、解题思路

  &emsp;&emsp;通过中序遍历BST，可以得到一个有序单调递增序列，那么通过记录前一个节点，就可以判断当前节点是否有误，从而找出那两个需要交换的节点。

### 二、代码实现

```JavaScript
const recoverTree = root => {

  let pre = null // 前一个节点值
  let t1 = null
  let t2 = null

  inOrder(root)

  const temp = t1.val
  t1.val = t2.val
  t2.val = temp

  return root

  function inOrder (root) {
    if (!root) {
      return
    }

    inOrder(root.left)
    if (pre !== null) {
      if (pre.val >= root.val && !t1) {
        // 找到第一个值
        t1 = pre
      }
      if (t1 && pre.val >= root.val) {
        // 第二个值
        t2 = root
      }
    }
    pre = root // 记录前一个节点的值
    inOrder(root.right)
  }
}
```