function findStrings(n, s1, s2) {
  const dp = Array(n);
  const count1 = dfs(0, true, n, dp, s1);
  const count2 = dfs(0, true, n, dp, s2);
  return count2 - count1 + 1;
}

function dfs(pos, isTopLimit, n, dp, s) {
  if (pos >= n) {
    return 1;
  }
  if (!isTopLimit && dp[pos] !== undefined) {
    return dp[pos];
  }

  let maxChar = 'z';
  if (isTopLimit) {
    maxChar = s[pos];
  }

  let ans = 0;
  for (let i = 'a'; i <= maxChar; i = String.fromCharCode(i.charCodeAt(0) + 1)) {
    ans += dfs(pos + 1, isTopLimit && (i === maxChar), n, dp, s);
  }
  if (!isTopLimit) {
    dp[pos] = ans;
  }
  return ans;
}

console.log(findStrings(1, 'b', 'e'));
console.log(findStrings(2, 'aa', 'da'));