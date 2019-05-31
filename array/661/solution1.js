/**
 * https://leetcode.com/problems/image-smoother/
 * 
 * 661. Image Smoother
 * 
 * Easy
 * 
 * 188ms 15.61%
 * 43.9MB 5.39%
 */
const imageSmoother = M => {
  const rows = M.length

  const ans = []

  for (let i = 0; i < rows; i++) {
    ans[i] = []
    const item = M[i]
    const cols = item.length
    for (let j = 0; j < cols; j++) {

      let sum = 0
      let count = 0

      const direction = [
        [i - 1, j - 1],
        [i - 1, j],
        [i - 1, j + 1],
        [i, j - 1],
        [i, j],
        [i, j + 1],
        [i + 1, j - 1],
        [i + 1, j],
        [i + 1, j + 1]
      ]

      direction.forEach(([row, col]) => {
        if (M[row]) {
          const _item = M[row][col]
          if (_item !== undefined) {
            count++
            sum += _item
          }
        }
      })

      ans[i][j] = Math.floor(sum / count)
    }
  }
  return ans
}