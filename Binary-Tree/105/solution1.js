/**
 * https://leetcode-cn.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/
 * 
 * 105. 从前序与中序遍历序列构造二叉树
 * 
 * Medium
 * 
 * 根 左 右
 * 
 * 左 根 右
 */
const buildTree = (preorder, inorder) => {
  if (preorder.length === 0) {
    return null
  }
  const rootValue = preorder.shift()
  const root = new TreeNode(rootValue)
  // 左右子树的分割点
  const index = inorder.indexOf(rootValue)

  root.left = buildTree(preorder.slice(0, index), inorder.slice(0, index))
  root.right = buildTree(preorder.slice(index), inorder.slice(index + 1))

  return root
}