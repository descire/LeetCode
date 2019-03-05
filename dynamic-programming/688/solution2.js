/**
 * https://leetcode.com/problems/knight-probability-in-chessboard/
 * 
 * 688. Knight Probability in Chessboard
 * 
 * Medium
 */
const knightProbability = (N, K, r, c) => {

  const moves = [[1, 2], [1, -2], [2, 1], [2, -1], [-1, 2], [-1, -2], [-2, 1], [-2, -1]]

  let preDP, nextDP

  preDP = new Array(N).fill(0).map(item => new Array(N).fill(0))

  preDP[r][c] = 1

  for (let k = 0; k < K; k++) {
    nextDP = new Array(N).fill(0).map(item => new Array(N).fill(0))
    for (let i = 0; i < N; i++) {
      for (let j = 0; j < N; j++) {
        for (let [xOffset, yOffset] of moves) {
          const row = i + xOffset
          const col = j + yOffset
          if (row >= 0 && row < N && col >= 0 && col < N) {
            nextDP[row][col] += preDP[i][j]
          }
        }
      }
    }
    preDP = nextDP
  }

  let sum = 0
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      sum += preDP[i][j]
    }
  }

  return sum / Math.pow(8, K)
}
