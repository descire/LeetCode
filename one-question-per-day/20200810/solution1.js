/**
 * 时间复杂度 O(n)
 * 空间复杂度 O(n) 可以优化为 O(1) 现在的思路看起来比较容易理解
 */
const countBinarySubstrings = function(s) {
  const counts = [];
  let startIndex = 0;
  while (startIndex < s.length) {
    const currentItem = s[startIndex];
    let currentTotal = 1;
    let i = startIndex + 1;
    while (i < s.length) {
      if (s[i] === currentItem) {
        currentTotal++;
        i++;
      } else {
        break;
      }
    }
    startIndex = i;
    counts.push(currentTotal);
  }

  let ans = 0;
  for (let i = 0; i < counts.length; i++) {
    ans += Math.min(counts[i], counts[i + 1] || 0);
  }
  return ans;
};