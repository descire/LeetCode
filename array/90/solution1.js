/**
 * https://leetcode.com/problems/subsets-ii/
 * 
 * 90. Subsets II
 * 
 * Medium
 * 
 * 68ms 69.40%
 * 36.5mb 38.14%
 */
const subsetsWithDup = nums => {
  const ans = [[]]
  const max = nums.length
  
  // 先排序 解决主键的排序复杂度
  nums.sort()

  const cache = new Set()
  for (let i = 0; i < max; i++) {
    const len = ans.length
    for (let j = 0; j < len; j++) {
      const item = [...ans[j], nums[i]]
      const key = item.join('-')
      if (cache.has(key)) {
        continue
      }
      ans.push(item)
      cache.add(key)
    }
  }
  return ans
}