/**
 * https://leetcode-cn.com/problems/second-minimum-node-in-a-binary-tree/
 * 
 * 671. 二叉树中第二小的节点
 * 
 * Easy
 * 
 * 最容易明白的方法 是 先遍历 再排序
 * 
 * 72ms 95.16%
 * 33.7mb 50.00%
 */
const findSecondMinimumValue = root => {

  if (!root) {
    return -1
  }

  if (!root.left && !root.right) {
    return -1
  }

  let left = root.left.val
  let right = root.right.val

  if (left === root.val) {
    left = findSecondMinimumValue(root.left)
  }
  if (right === root.val) {
    right = findSecondMinimumValue(root.right)
  }

  if (left !== -1 && right !== -1) {
    return Math.min(left, right)
  } else if (left != -1) {
    return left
  } else {
    return right
  }
}