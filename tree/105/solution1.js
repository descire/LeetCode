/**
 * https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/
 * 
 * 105. Construct Binary Tree from Preorder and Inorder Traversal
 * 
 * 【Medium】
 */
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