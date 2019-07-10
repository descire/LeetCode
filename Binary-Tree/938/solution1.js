/**
 * https://leetcode-cn.com/problems/range-sum-of-bst/
 * 
 * 938. 二叉搜索树的范围和
 * 
 * Easy
 * 
 * 272ms 96.57%
 * 66.3mb 92.31%
 */
const rangeSumBST = (root, L, R) => {
  if (!root) {
    return 0
  }

  let ans = 0

  const val = root.val

  if (val >= L && val <= R) {
    ans += val
    ans += rangeSumBST(root.left, L, R)
    ans += rangeSumBST(root.right, L, R)
  } else if (val < L) {
    ans += rangeSumBST(root.right, L, R)
  } else if (val > R) {
    ans += rangeSumBST(root.left, L, R)
  }
  return ans
}