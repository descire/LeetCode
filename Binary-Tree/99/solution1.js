const recoverTree = root => {

  let pre = null // 前一个节点值
  let t1 = null
  let t2 = null

  inOrder(root)

  const temp = t1.val
  t1.val = t2.val
  t2.val = temp

  return root

  function inOrder (root) {
    if (!root) {
      return
    }

    inOrder(root.left)
    if (pre !== null) {
      if (pre.val >= root.val && !t1) {
        // 找到第一个值
        t1 = pre
      }
      if (t1 && pre.val >= root.val) {
        // 第二个值
        t2 = root
      }
    }
    pre = root // 记录前一个节点的值
    inOrder(root.right)
  }
}