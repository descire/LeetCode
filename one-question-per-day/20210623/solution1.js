const hammingWeight = (n) => {
  let ans = 0;
  n = n.toString(2);
  for (let i = 0; i < n.length; i++) {
    if (n[i] === '1') {
      ans++;
    }
  }
  return ans;
}