/**
 * https://leetcode.com/problems/majority-element/
 * 
 * 169. Majority Element
 * 
 * Easy
 */
const majorityElement = nums => {
  const max = nums.length
  if (max < 2) {
    return nums[0]
  }
  const hashmap = new Map()

  for (let i = 0; i < max; i++) {
    const item = nums[i]
    if (!hashmap.get(item)) {
      hashmap.set(item, 0)
    }
    hashmap.set(item, hashmap.get(item) + 1)
  }

  let _max = Number.MIN_SAFE_INTEGER
  let ans = null
  for (let [key, count] of hashmap) {
    if (count > _max) {
      _max = count
      ans = key
    }
  }

  return ans
}