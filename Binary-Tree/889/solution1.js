/**
 * https://leetcode-cn.com/problems/construct-binary-tree-from-preorder-and-postorder-traversal/
 * 
 * 889. 根据前序和后序遍历构造二叉树
 * 
 * Medium
 * 
 * 根 左 右
 * 
 * 左 右 根
 * 
 * 104ms 89.29%
 * 
 * 36.3mb 43.75%
 * 
 */
const constructFromPrePost = (pre, post) => {
  if (pre.length === 0) {
    return null
  }
  // 拿出根节点
  const rootValue = pre.shift()
  post.pop()

  const root = new TreeNode(rootValue)

  if (pre.length > 0) {
    // 左子树的根节点
    const l = pre[0]
    const lIndex = post.indexOf(l)

    root.left = constructFromPrePost(pre.slice(0, lIndex + 1), post.slice(0, lIndex + 1))
    root.right = constructFromPrePost(pre.slice(lIndex + 1), post.slice(lIndex + 1))
  }
  return root
}