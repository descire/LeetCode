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