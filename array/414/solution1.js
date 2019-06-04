/**
 * https://leetcode.com/problems/third-maximum-number/
 * 
 * 414. Third Maximum Number
 * 
 * Easy
 * 
 * 68ms 60.91%
 * 37.9mb 17.03%
 */
const thirdMax = nums => {
  const s = new Set(nums)
  const array = [...s]
  array.sort((a, b) => a - b)

  const thirdMax = array[array.length - 3]
  if (thirdMax === undefined) {
    return array[array.length - 1]
  }
  return thirdMax
}