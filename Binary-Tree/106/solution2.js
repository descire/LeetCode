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
 * 100ms 94.87%
 * 36.4mb 71.43%
 */
const buildTree = (inorder, postorder) => {
  const record = new Map()
  inorder.forEach((item, index) => record.set(item, index))
  return _buildTree(inorder, postorder, 0, inorder.length - 1, 0, inorder.length - 1, record)
}
function _buildTree(inorder, postorder, sx, ex, sy, ey, record) {
  if (sx > ex) {
    return null
  }
  const rootValue = postorder[ey]
  const root = new TreeNode(rootValue)
  const index = record.get(rootValue)
  root.left = _buildTree(inorder, postorder, sx, index - 1, sy, sy + index - sx - 1, record)
  root.right = _buildTree(inorder, postorder, index + 1, ex, sy + index - sx, ey - 1, record)
  return root
}