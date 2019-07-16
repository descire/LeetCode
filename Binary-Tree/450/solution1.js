/**
 * https://leetcode-cn.com/problems/delete-node-in-a-bst/
 * 
 * 450. 删除二叉搜索树中的节点
 * 
 * Medium
 * 
 * 116ms 100%
 * 42.3mb 30.00%
 * 
 */
const deleteNode = (root, key) => {
  if (!root) {
    return null
  }

  const rootValue = root.val

  if (rootValue > key) {
    root.left = deleteNode(root.left, key)
  } else if (rootValue < key) {
    root.right = deleteNode(root.right, key)
  } else {
    if (root.left && root.right) {
      // 找一个最小的替换当前根节点，再删除这个替换的节点。
      let min = root.right
      while (min.left) {
        min = min.left
      }
      root.val = min.val
      root.right = deleteNode(root.right, min.val)
    } else {
      return root.left ? root.left : root.right
    }
  }

  return root
}