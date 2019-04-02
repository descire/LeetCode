/**
 * https://leetcode.com/problems/reshape-the-matrix/
 * 
 * 566. Reshape the Matrix
 * 
 * Easy
 */
const matrixReshape = (num, r, c) => {
  const result = []
  const row = num.length
  const col = num[0].length
  let temp = []
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      const index = i * col + j + 1
      temp.push(num[i][j])
      if (index % c === 0) {
        result.push(temp.map(item => item))
        temp = []
        r--
        if (r === 0 && i === row - 1 && j === col - 1) {
          return result
        }
      }
    }
  }
  if (r !== 0) {
    return num
  }
  return result
}