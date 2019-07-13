/**
 * https://leetcode-cn.com/problems/binary-tree-postorder-traversal/
 * 
 * 145. 二叉树的后序遍历
 * 
 * Hard
 * 
 * 迭代的方式处理
 * 
 * 栈先进后出
 * 
 * 76ms 84.00%
 * 33.8mb 18.03%
 */
const postorderTraversal = root => {
  const ans = []
  if (!root) {
    return ans
  }
  const stack = [root]
  while (stack.length) {
    const item = stack.pop()
    if (item) {
      ans.push(item.val)
      stack.push(item.left)
      stack.push(item.right)
    }
  }
  return ans.reverse()
}