# [105. Construct Binary Tree from Preorder and Inorder Traversal](https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/)

### 一、解题思路

  &emsp;&emsp;解决这类题目的核心点，需要理解二叉树的几种遍历序列：

  - 前序遍历 根 - 左 - 右
  - 中序遍历 左 - 根 - 右
  - 后序遍历 左 - 右 - 根

  &emsp;&emsp;然后就需要从一个序列中找到根节点，通过在另一个序列中查找该根节点，从而获取到左右子树的遍历序列。

  &emsp;&emsp;举个例子：

```s
  前序遍历序列：[3,9,20,15,7]
  中序遍历序列：[9,3,15,20,7]
```

  &emsp;&emsp;首先从前序遍历中，很容易可以找到当前子树的根节点为3，从中序遍历序列中，又可以知道3的左边为左子树的中序遍历序列，右边为右子树的中序遍历序列，那么通过根节点在中序遍历序列中的下标进行分割，可以得到左右子树的遍历序列。

```s
  1、左子树
  前序遍历序列： [9]
  中序遍历序列： [9]

  2、右子树
  前序遍历序列： [20, 15, 7]
  中序遍历序列： [15, 20, 7]
```

### 二、代码实现

```JavaScript
const buildTree = (preorder, inorder) => {
  if (preorder.length === 0) {
    return null
  }
  const rootValue = preorder.shift()
  const root = new TreeNode(rootValue)
  const index = inorder.indexOf(rootValue)

  root.left = buildTree(preorder.slice(0, index), inorder.slice(0, index))
  root.right = buildTree(preorder.slice(index), inorder.slice(index + 1))

  return root
}
```