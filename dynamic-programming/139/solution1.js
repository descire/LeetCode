/**
 * https://leetcode.com/problems/word-break/
 * 
 * 139. Word Break
 * 
 * Medium
 */
const wordBreak = (s, wordDist) => {
  const max = wordDist.length
  const cache = new Map()
  for (let i = 0; i < max; i++) {
    cache.set(wordDist[i], true)
  }

  return dfs(s)

  function dfs (s) {
    const cacheResult = cache.get(s)
    if ( cacheResult !== undefined) {
      return cacheResult
    }
    for (let i = 0, len = s.length; i < len && len !== 1; i++) {
      const left = s.substring(0, i)
      const right = s.substring(i)
      if (dfs(left) && dfs(right)) {
        cache.set(s, true)
        return true
      }
    }

    cache.set(s, false)
    return false
  }
}