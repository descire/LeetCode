const convertBST = root => {
  let sum = 0
  dfs(root)
  return root
  function dfs (root) {
    if (!root) {
      return
    }
    dfs(root.right)
    root.val += sum
    sum = root.val
    dfs(root.left)
  }
}