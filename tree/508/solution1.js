const findFrequentTreeSum = root => {
  const sumList = {}

  order(root)

  const max = Math.max.apply(this, Object.values(sumList))

  const ans = []
  for (let key in sumList) {
    if (sumList[key] === max) {
      ans.push(key)
    }
  }

  return ans

  function order (root) {
    if (!root) {
      return 0
    }

    const curSum = root.val + order(root.left) + order(root.right)

    sumList[curSum] || (sumList[curSum] = 0)
    sumList[curSum]++
    return curSum
  }
}