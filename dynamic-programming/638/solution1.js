/**
 * 
 * https://leetcode.com/problems/shopping-offers/
 * 
 * 638. Shopping Offers
 * 
 * Medium
 * 
 */
const shoppingOffers = (price, special, needs) => {
  const max = price.length
  if (!max) {
    return 0
  }
  let min = 0

  for (let i = 0; i < max; i++) {
    min += price[i] * needs[i]
  }

  for (let i = 0; i < special.length; i++) {
    const s = special[i]
    const len = s.length
    let m = s[len - 1]
    const newNeeds = needs.map((item, index) => {
      return item - s[index]
    })
    if (!checkAmount(newNeeds)) {
      continue
    }
    min = Math.min(shoppingOffers(price, special, newNeeds) + m, min)
  }
  return min  
}

function checkAmount (needs) {
  for (let i = 0; i < needs.length; i++) {
    if (needs[i] < 0) {
      return false
    }
  }
  return true
}