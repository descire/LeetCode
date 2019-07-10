/**
 * https://leetcode-cn.com/problems/increasing-order-search-tree/
 * 
 * 897. 递增顺序查找树
 * 
 * Easy
 * 
 * 200ms 94.34%
 * 43.2mb 32.00%
 * 
 */
const increasingBST = root => {
  if (!root) {
    return null
  }

  const ans = []
  inOrder(root, ans)
  const tree = new TreeNode(ans[0])
  let pre = tree
  for (let i = 1, max = ans.length; i < max; i++) {
    pre.right = new TreeNode(ans[i])
    pre = pre.right
  }
  return tree
}

function inOrder (root, ans) {
  if (!root) {
    return
  }
  inOrder(root.left, ans)
  ans.push(root.val)
  inOrder(root.right, ans)
}