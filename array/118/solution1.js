/**
 * https://leetcode.com/problems/pascals-triangle/
 * 
 * 118. Pascal's Triangle
 * 
 * Easy
 * 
 * 64ms 26.41%
 * 33.8MB 77.12%
 */
const generate = numRows => {

  const ans = []
  if (numRows === 0) {
    return ans
  }

  ans.push([1])

  if (numRows === 1) {
    return ans
  }

  ans.push([1, 1])

  if (numRows === 2) {
    return ans
  }

  for (let i = 2; i < numRows; i++) {
    const temp = [1]
    for (let j = 1; j < i; j++) {
      temp[j] = ans[i - 1][j - 1] + ans[i - 1][j]
    }
    temp.push(1)
    ans.push(temp)
  }

  return ans
}