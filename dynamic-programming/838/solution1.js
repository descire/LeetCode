/**
 * 
 * https://leetcode.com/problems/push-dominoes/
 * 
 * 
 * 838. Push Dominoes
 * 
 * Medium
 */
const pushDominoes = dominoes => {
  dominoes = 'L' + dominoes + 'R'
  let ans = ''
  for (let i = 0, j = 1, max = dominoes.length; j < max; j++) {
    if (dominoes[j] === '.') {
      continue
    }
    const middle = j - i - 1

    if (i > 0) {
      ans += dominoes[i]
    }
    if (dominoes[i] === dominoes[j]) {
      ans += dominoes[i].repeat(middle)
    } else if (dominoes[i] === 'L' && dominoes[j] === 'R') {
      ans += '.'.repeat(middle)
    } else {
      ans += 'R'.repeat(middle / 2) + '.'.repeat(middle % 2) + 'L'.repeat(middle / 2)
    }

    i = j
  }
  return ans
}