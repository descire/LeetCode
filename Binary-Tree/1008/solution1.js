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
const bstFromPreorder = perorder => {
  // 终止条件
  if (!perorder.length) {
    return null
  }
  const root = new TreeNode(perorder[0])

  // 寻找左右子树的分割点
  let index = 0
  const max = perorder.length
  for (let i = 0; i < max; i++) {
    if (perorder[0] >= perorder[i]) {
      index = i
      continue
    }
    break
  }
  root.left = bstFromPreorder(perorder.slice(1, index + 1))  
  root.right = bstFromPreorder(perorder.slice(index + 1))
  return root
}