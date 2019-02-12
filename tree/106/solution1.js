/**
 * https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/
 * 
 * 106. Construct Binary Tree from Inorder and Postorder Traversal
 * 
 * 【Medium】
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