/**
 * https://leetcode.com/problems/construct-binary-tree-from-preorder-and-postorder-traversal/
 * 
 * 889. Construct Binary Tree from Preorder and Postorder Traversal
 * 
 * 【Medium】
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