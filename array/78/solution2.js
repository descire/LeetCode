/**
 * https://leetcode.com/problems/subsets/
 * 
 * 78. Subsets
 * 
 * Medium
 * 
 * 56ms 94.68%
 * 35.2mb 41.78%
 */
const subsets = nums => {
  const ans = [[]]
  for (let i = 0, max = nums.length; i < max; i++) {
    const len = ans.length
    for (let j = 0; j < len; j++) {
      ans.push([...ans[j], nums[i]])
    }
  }
  return ans
}