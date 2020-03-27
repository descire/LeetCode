/**
 * https://leetcode-cn.com/problems/x-of-a-kind-in-a-deck-of-cards/
 * 
 * 914. 卡牌分组
 * 
 * Easy
 * 
 * 64ms 95.65%
 * 36mb 88.14%
 * 
 * 最小公约数
 */
const hasGroupsSizeX = deck => {
  const record = new Map();
  for (let i = 0; i < deck.length; i++) {
    if (!record.has(deck[i])) {
      record.set(deck[i], 0);
    }
    record.set(deck[i], record.get(deck[i]) + 1);
  }

  const values = Array.from(record.values());
  let g = values[0];
  for (let i = 1; i < values.length; i++) {
    g = gcd(g, values[i]);
    if (g === 1) {
      return false;
    }
  }
  if (g === 1) {
    return false;
  }
  return true;
}

function gcd(a, b) {
  if (a % b === 0) {
    return b;
  }
  return gcd(b, a % b);
}