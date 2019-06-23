/**
 * https://leetcode-cn.com/problems/k-diff-pairs-in-an-array/
 * 
 * 532. 数组中的K-diff数对
 * 
 * Easy
 */
const findPairs = (nums, k) => {
  const record = new Set()
  for (let i = 0, max = nums.length; i < max - 1; i++) {
    for (let j = i + 1; j < max; j++) {
      const x = nums[i]
      const y = nums[j]
      if (Math.abs(x - y) === k) {
        if (x > y) {
          record.add(`${x}-${y}`)
        } else {
          record.add(`${y}-${x}`)
        }
      }
    }
  }

  return record.size
}