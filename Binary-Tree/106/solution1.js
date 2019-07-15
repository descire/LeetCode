/**
 * 106. 从中序与后序遍历序列构造二叉树
 * 
 * https://leetcode-cn.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/
 * 
 * Medium
 * 
 * 左 根 右
 * 
 * 左 右 根
 * 
 * 200ms 47.44%
 * 128mb 8.57%
 * 
 */
const buildTree = (inorder, postorder) => {
  if (inorder.length === 0) {
    return null
  }

  const rootValue = postorder.pop()
  const root = new TreeNode(rootValue)
  const index = inorder.indexOf(rootValue)
  root.left = buildTree(inorder.slice(0, index), postorder.slice(0, index))
  root.right = buildTree(inorder.slice(index + 1), postorder.slice(index))
  return root
}