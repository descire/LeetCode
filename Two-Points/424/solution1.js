/**
 * https://leetcode-cn.com/problems/longest-repeating-character-replacement/
 * 
 * 424. 替换后的最长重复字符
 * 
 * 相似的题目 1004
 * 
 * 滑动窗口算法 
 * 
 * 如何确定左滑和右滑的条件
 * 
 * Medium
 */
const characterReplacement = (s, k) => {
  const countMap = new Map()
  let ans = 0
  const max = s.length
  let start = 0
  let end = 0
  while (end < s && start <= end) {
    const curItem = s[end]
  }
}