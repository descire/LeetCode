/**
 * https://leetcode-cn.com/problems/construct-binary-search-tree-from-preorder-traversal/
 * 
 * 1008. 先序遍历构造二叉树
 * 
 * Medium
 * 
 * 根 左 右
 * 
 * 76ms 90.91%
 * 34.7mb 42.42%
 */
const bstFromPreorder = preorder => {
  // 终止条件
  if (!preorder.length) {
    return null
  }
  const root = new TreeNode(preorder[0])

  // 寻找左右子树的分割点
  let index = 0
  const max = preorder.length
  for (let i = 0; i < max; i++) {
    if (preorder[0] >= preorder[i]) {
      index = i
      continue
    }
    break
  }
  root.left = bstFromPreorder(preorder.slice(1, index + 1))  
  root.right = bstFromPreorder(preorder.slice(index + 1))
  return root
}