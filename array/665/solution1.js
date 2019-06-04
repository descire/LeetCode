/**
 * https://leetcode.com/problems/non-decreasing-array/
 * 
 * 665. Non-decreasing Array
 * 
 * Easy
 * 
 * 64ms 94.31%
 * 
 * 37.1MB 25.07%
 */
const checkPossibility = nums => {
  let preItem = nums[0]
  let isUpdate = false
  for (let i = 1, max = nums.length; i < max; i++) {
    const curItem = nums[i]
    if (preItem > curItem) {
      if (isUpdate) {
        return false
      }
      isUpdate = true

      // a b c 

      if (nums[i - 2] === undefined) {
        nums[i - 1] = curItem
      } else {

        if (curItem < nums[i - 2]) {
          nums[i] = nums[i - 1]
        } else {
          nums[i - 1] = curItem
        }
      }
    }
    preItem = nums[i]
  }

  return true
}