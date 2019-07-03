/**
 * https://leetcode-cn.com/problems/partition-labels/
 * 
 * 763. 划分字母区间
 * 
 * Medium
 * 
 * 88ms 96.67%
 * 36.2mb 71.43%
 * 
 * 本题的核心在于：每段的长度由其中字母最大的出现下标决定
 */
const partitionLabels = (S) => {
  const ans = []
  const charSet = new Map()
  const max = S.length
  for (let i = 0; i < max; i++) {
    charSet.set(S[i], i)
  }

  let start = 0
  let end = 0
  for (let i = 0; i < max; i++) {
    end = Math.max(charSet.get(S[i]), end)
    if (end === i) {
      ans.push(end - start + 1)
      start = end + 1
    }
  }
  return ans
}


console.log(partitionLabels('ababcbacadefegdehijhklij')) // [9, 7, 8]