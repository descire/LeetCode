/**
 * https://leetcode.com/problems/available-captures-for-rook/
 * 
 * 999. Available Captures for Rook
 * 
 * Easy
 */
const numRookCaptures = board => {
  let row, col

  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      const item = board[i][j]
      if (item === 'R') {
        row = i
        col = j
      }
    }
  }

  const rowItem = board[row]
  const colItem = []
  for (let i = 0; i < 8; i++) {
    colItem.push(board[i][col])
  }
  let ans = 0
  // 找水平方向的
  for (let i = col - 1; i >= 0; i--) {
    const item = board[row][i]
    if (item === 'p') {
      ans++
      break
    }
    if (item === 'B') {
      break
    }
  }
  for (let i = col + 1; i < 8; i++) {
    const item = board[row][i]
    if (item === 'p') {
      ans++
      break
    }
    if (item === 'B') {
      break
    }
  }
  // 找垂直方向的
  for (let i = row - 1; i >= 0; i--) {
    const item = board[i][col]
    if (item === 'p') {
      ans++
      break
    }
    if (item === 'B') {
      break
    }
  }

  for (let i = row + 1; i < 8; i++) {
    const item = board[i][col]
    if (item === 'p') {
      ans++
      break
    }
    if (item === 'B') {
      break
    }
  }

  return ans
}