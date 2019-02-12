/**
 * 
 * https://leetcode.com/problems/binary-tree-cameras/
 * 
 * 968. Binary Tree Cameras
 * 
 * 【Hard】
 */

const minCameraCover = root => {
  let ans = 0

  if (help(root) === 0) {
    // 仅有一个根节点
    ans++
  }
  return ans

  // 如何标记当前节点的状态
  // 0 表示未被覆盖 1 表示被覆盖 2 表示有摄像头
  function help (root) {
    if (!root) {
      return 1
    }
    const l = help(root.left)
    const r = help(root.right)

    if (l === 0 || r === 0) {
      ans++
      return 2
    }
    if (l === 2 || r === 2) {
      return 1
    }

    return 0
  }
}