const distanceK = (root, target, K) => {
  
  const graph = {}
  let ans = []

  // 边界条件
  if (!root) {
    return ans
  }
  const tv = target.val
  // 边界条件
  if (K === 0) {
    return [tv]
  }

  // 构建无向图
  buildGraph(null, root)

  ans = graph[tv] || []

  const record = new Set() // 记录访问过的节点

  record.add(tv)

  let step = K

  while (--step && ans.length) {
    const max = ans.length

    for (let i = 0; i < max; i++) {
      const item = ans.pop()
      record.add(item)
      const sub = graph[item]
      for (let j = 0; j < sub.length; j++) {
        const x = sub[j]
        if (!record.has(x)) {
          ans.unshift(x)
          record.add(x)
        }
      }
    }
  }

  return ans
  function buildGraph (parent, child) {
    if (parent && child) {
      const pv = parent.val
      const cv = child.val
      if (!graph[pv]) {
        graph[pv] = []
      }
      if (!graph[cv]) {
        graph[cv] = []
      }
      graph[pv].push(cv)
      graph[cv].push(pv)
    }

    if (child.left) {
      buildGraph(child, child.left)
    }
    if (child.right) {
      buildGraph(child, child.right)
    }
  }
}