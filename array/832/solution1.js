/**
 * https://leetcode.com/problems/flipping-an-image/
 * 
 * 832. Flipping an Image
 * 
 * Easy
 */
const flipAndInvertImage = A => {
  const ans = []
  for (let i = 0, max = A.length; i < max; i++) {
    const item = A[i]
    ans[i] = []
    for (let j = 0, subMax = item.length; j < subMax; j++) {
      ans[i].unshift(item[j] == 1 ? 0 : 1)
    }
  }
  return ans
}