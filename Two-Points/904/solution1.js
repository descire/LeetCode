/**
 * https://leetcode-cn.com/problems/fruit-into-baskets/
 * 
 * 904. 水果成篮
 * 
 * Medium
 * 
 * 滑动窗口 + hashtable
 * 
 * 164ms 88.24%
 * 47.5mb 20.00%
 */
const totalFruit = tree => {
  const max = tree.length
  const record = new Map()
  let ans = 0
  let start = 0
  let end = 0

  let currentAccount = 0

  while (end < max) {
    const item = tree[end]
    if (!record.has(item) && record.size === 2) {
      // 当前已经放了两种水果
      const [x, y] = record.entries()
      if (x[1] > y[1]) {
        record.delete(y[0])
        currentAccount = end - y[1]
      } else {
        record.delete(x[0])
        currentAccount = end - x[1]
      }
    } else {
      currentAccount++
    }
    record.set(item, end)
    end++
    ans = Math.max(currentAccount, ans)
  }
  return ans
}

console.log(totalFruit([1, 2, 1])) // 3
console.log(totalFruit([0, 1, 2, 2])) // 3
console.log(totalFruit([1, 2, 3, 2, 2])) // 4