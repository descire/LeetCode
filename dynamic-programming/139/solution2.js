/**
 * https://leetcode.com/problems/word-break/
 * 
 * 139. Word Break
 * 
 * Medium
 */
const wordBreak = (s, wordDist) => {
  const wmax = wordDist.length
  if (!wmax) {
    return false
  }
  const m = new Map()
  for (let i = 0; i < wmax; i++) {
    m.set(wordDist[i], true)
  }
  m.set('', true)

  const dp = [true]
  const max = s.length
  for (let i = 1; i <= max; i++) {
    if (i === 1) {
      dp[i] = !!m.get(s[i - 1])
      continue
    }
    dp[i] = false
    for (let j = 1; j <= i; j++) {
      const next = s.substring(j - 1, i)
      if (dp[j - 1] && m.get(next)) {
        dp[i] = true
        break
      }
    }
  }
  return dp[max]
}