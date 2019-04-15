/**
 * https://leetcode.com/problems/majority-element-ii/
 * 
 * 
 * 229. Majority Element II
 * 
 * Medium
 */
const majorityElement = nums => {
  const max = nums.length
  const size = Math.floor(max / 3)

  const hashmap = new Map()

  for (let i = 0; i < max; i++) {
    const num = nums[i]
    const x = hashmap.get(num)
    if (!x) {
      hashmap.set(num, 1)
      continue
    }

    hashmap.set(num, x + 1)
  }

  const ans = []
  for (let [num, count] of hashmap) {
    if (count > size) {
      ans.push(num)
    }
  }

  return ans
}