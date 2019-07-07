/**
 * https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/
 * 
 * 3. 无重复字符的最长子串
 * 
 * Medium
 * 
 * 104ms 97.26%
 * 37.8mb 84.44%
 */
const lengthOfLongestSubstring = s => {
  const record = new Map()
  const max = s.length
  let ans = 0
  let start = 0
  let end = 0
  while (end < max) {
    const item = s[end]
    if (record.has(item)) {
      const preIndex = record.get(item)
      start = preIndex < start ? start : preIndex + 1
    }
    record.set(item, end)
    ans = Math.max(ans, end - start + 1)
    end++
  }
  return ans
}