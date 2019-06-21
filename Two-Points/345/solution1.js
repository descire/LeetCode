  /**
   * https://leetcode-cn.com/problems/reverse-vowels-of-a-string/
   * 
   * 345. 反转字符串中的元音字母
   * 
   * Easy
   * 
   * 95.35%
   * 43.37%
   */
  const reverseVowels = s => {
    const max = s.length
    s = s.split('')
    const result = []
    const keys = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'])
    let start = 0
    let end = max - 1
    while (start < end) {
      const isStart = keys.has(s[start])
      const isEnd = keys.has(s[end])
      if (isStart && isEnd) {
        [s[start], s[end]] = [s[end], s[start]]
        start++
        end--
        continue
      }

      if (isStart) {
        end--
        continue
      }

      if (isEnd) {
        start++
        continue
      }
      start++
      end--
    }
    return s.join('')
  }