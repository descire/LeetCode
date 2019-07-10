const isCompleteTree = root => {
  const stack = [root]
    
  while (stack[0] != null) {        
    root = stack.shift()
    stack.push(root.left)
    stack.push(root.right)
  }

  for (let i = 1; i < stack.length; i++) {
    if (stack[i] != null) {
      return false
    }
  }
  return true
}