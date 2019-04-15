/**
 * 448. Find All Numbers Disappeared in an Array
 * 
 * https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/
 * 
 * Easy
 */
const findDisappearedNumbers = nums => {
  const max = nums.length
  if (!max) {
    return []
  }

  const temp = []

  for (let i = 0; i < max; i++) {
    const num = nums[i]
    temp[num - 1] = num
  }

  const ans = []
  for (let i = 0; i < max; i++) {
    if (temp[i] == null) {
      ans.push(i + 1)
    }
  }

  return ans
}