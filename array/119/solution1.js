/**
 * https://leetcode.com/problems/pascals-triangle-ii/
 * 
 * 119. Pascal's Triangle II
 * 
 * Easy
 * 
 * 44ms 99.54%
 * 33.8mb 86.90%
 */
const getRow = index => {
  let ans = [1]

  if (index === 0) {
    return ans
  }
  ans.push(1)

  if (index === 1) {
    return ans
  }

  for (let i = 2; i <= index; i++) {
    const temp = [1]
    for (let j = 1; j < i; j++) {
      temp[j] = ans[j - 1] + ans[j]
    }
    temp.push(1)
    ans = temp
  }

  return ans
}