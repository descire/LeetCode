/**
 * https://leetcode.com/problems/palindrome-partitioning/
 * 
 * 131. Palindrome Partitioning
 * 
 * Medium
 */
const partition = s => {
  const max = s.length
  const ans = []
  const path = []

  dfs(s, 0, path, ans)
  return ans
  function dfs (s, pos, path, ans) {
    if (pos === max) {
      ans.push([...path])
      return
    }
    for (let i = pos; i < max; i++) {
      if (isPalindrome(s, pos, i)) {
        path.push(s.substring(pos, i + 1))
        dfs(s, i + 1, path, ans)
        path.pop()
      }
    }
  }
}

function isPalindrome (s, i, j) {
  for (let start = i, end = j; start <= end;) {
    if (s[start] === s[end]) {
      start++
      end--
      continue
    }
    return false
  }
  return true
}