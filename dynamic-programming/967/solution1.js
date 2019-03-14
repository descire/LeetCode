/**
 * https://leetcode.com/problems/numbers-with-same-consecutive-differences/
 * 
 * 967. Numbers With Same Consecutive Differences
 * 
 * Medium
 */
const numsSameConsecDiff = (N, K) => {
  const ans = []
  const temp = []
  if (N === 1) {
    ans.push(0)
  }

  for (let i = 1; i <= 9; i++) {
    temp.push(i)
    dfs(N - 1, i)
    temp.pop()
  }

  return ans

  function dfs (N, cur) {
    if (N === 0) {
      ans.push(temp.join(''))
      return
    }

    if (cur + K <= 9) {
      temp.push(cur + K)
      dfs(N - 1, cur + K)
      temp.pop()
    }
    if (cur - K >= 0 && K !== 0) {  // K等于0时重复情况
      temp.push(cur - K)
      dfs(N - 1, cur - K)
      temp.pop()
    }
  }
}