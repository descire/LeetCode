/**
 * https://leetcode-cn.com/problems/construct-string-from-binary-tree/
 * 
 * 606. 根据二叉树创建字符串
 * 
 * Easy
 * 
 * 112ms 74.47%
 * 37.5mb 100.00%
 * 
 */
const tree2str = t => {
  if (!t) {
    return ''
  }
  if (!t.left && !t.right) {
    return `${t.val}`
  }
  if (!t.left) {
    return `${t.val}()(${tree2str(t.right)})`
  }
  if (!t.right) {
    return `${t.val}(${tree2str(t.left)})`
  }
  return `${t.val}(${tree2str(t.left)})(${tree2str(t.right)})`
}