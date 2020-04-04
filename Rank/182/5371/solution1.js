/**
 * https://leetcode-cn.com/problems/find-all-good-strings/
 * 
 * 
 * 1397. 找到所有好字符串
 * 
 * Hard
 * 
 * 120ms 100.00%
 * 41.5mb 100.00%
 */
const MAX_INT = 10 ** 9 + 7;
let dp;
let next;
let m;
let total;
let currentEvil;
let limit;
const findGoodStrings = (n, s1, s2, evil) => {
  m = evil.length;
  total = n;
  next = makeNext(evil);
  dp = Array.from({ length: 501 }, () => Array(51));
  currentEvil = evil;
  limit = s1;
  const ans1 = dfs(0, 0, true);
  limit = s2;
  const ans2 = dfs(0, 0, true);
  let ans = (ans2 - ans1 + MAX_INT) % MAX_INT;

  if (!s1.includes(evil)) {
    ans++;
  }
  return ans;
}

function dfs(pos, match, isTopLimit) {
  if (match >= m) {
    return 0;
  }
  if (pos >= total) {
    return 1;
  }
  if (!isTopLimit && dp[pos][match] !== undefined) {
    return dp[pos][match];
  }
  let maxChar = 'z';
  if (isTopLimit) {
    maxChar = limit[pos];
  }
  
  let ans = 0;
  for (let i = 'a'; i <= maxChar; i = String.fromCharCode(i.charCodeAt(0) + 1)) {
    let currentMatch = match;
    while (currentMatch > 0 && currentEvil[currentMatch] !== i) {
      currentMatch = next[currentMatch];
    }
    if (currentMatch >= 0 && i === currentEvil[currentMatch]) {
      currentMatch++;
    }
    ans = (ans + dfs(pos + 1, currentMatch, isTopLimit && (i === maxChar))) % MAX_INT;
  }

  if (!isTopLimit) {
    dp[pos][match] = ans;
  }
  return ans;
}

function makeNext(str) {
  const len = str.length;
  const next = Array(len + 1)
  next[0] = -1;
  let i = 0;
  let j = -1;
  while (i < len) {
    if(j === -1 || str[i] === str[j]) {
      ++i;
      ++j;
      next[i] = j;
  } else
      j = next[j];
  }
  return next;
}