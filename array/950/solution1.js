/**
 * https://leetcode.com/problems/reveal-cards-in-increasing-order/
 * 
 * 950. Reveal Cards In Increasing Order
 * 
 * Medium
 * 
 * 72ms 85.37%
 * 35.5mb 92.40%
 */
const deckRevealedIncreasing = deck => {
  deck.sort((a, b) => a - b)

  const max = deck.length - 1

  const ans = []

  for (let i = max; i >= 0; i--) {
    const item = deck[i]
    order(ans)
    ans.unshift(item)
  }
  return ans
}

function order(ans) {
  const max = ans.length
  if (max <= 1) {
    return
  }

  const suf = ans.pop()
  ans.unshift(suf)
}
