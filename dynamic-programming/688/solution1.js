/**
 * https://leetcode.com/problems/knight-probability-in-chessboard/
 * 
 * 688. Knight Probability in Chessboard
 * 
 * Medium
 * DFS TLE
 */
const knightProbability = (N, K, r, c) => {
  let valid = 0

  dfs(r, c, 0)

  return valid / Math.pow(8, K)

  function dfs (x, y, step) {
    if (x < 0 || x > N - 1 || y < 0 || y > N - 1) {
      return
    }
    if (step === K) {
      valid++
      return
    }

    dfs(x - 2, y - 1, step + 1)
    dfs(x - 2, y + 1, step + 1)
    dfs(x - 1, y + 2, step + 1)
    dfs(x - 1, y - 2, step + 1)
    dfs(x + 1, y - 2, step + 1)
    dfs(x + 1, y + 2, step + 1)
    dfs(x + 2, y - 1, step + 1)
    dfs(x + 2, y + 1, step + 1)
  }
}