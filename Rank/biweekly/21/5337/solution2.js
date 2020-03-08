/**
 * https://leetcode-cn.com/problems/find-the-longest-substring-containing-vowels-in-even-counts/
 * 
 * 5337. 每个元音包含偶数次的最长子字符串
 * 
 * Medium
 * 
 * 196ms 100.00%
 * 108.5mb 100.00%
 * 
 */
const findTheLongestSubstring = s => {
  let ans = 0;
  const max = s.length;
  const countA = Array(max + 1).fill(0);
  const countE = Array(max + 1).fill(0);
  const countI = Array(max + 1).fill(0);
  const countO = Array(max + 1).fill(0);
  const countU = Array(max + 1).fill(0);

  for (let i = 1; i <= max; i++) {
    countA[i] = countA[i - 1] + (s[i - 1] === 'a');
    countE[i] = countE[i - 1] + (s[i - 1] === 'e');
    countI[i] = countI[i - 1] + (s[i - 1] === 'i');
    countO[i] = countO[i - 1] + (s[i - 1] === 'o');
    countU[i] = countU[i - 1] + (s[i - 1] === 'u');
  }

  for (let i = 0; i <= max; i++) {
    for (let j = max; j > i; j--) {

      // 剪枝操作
      if (j - i < ans) {
        break;
      }

      if (
        (countA[j] - countA[i]) % 2 === 0
        && (countE[j] - countE[i]) % 2 === 0
        && (countI[j] - countI[i]) % 2 === 0
        && (countO[j] - countO[i]) % 2 === 0
        && (countU[j] - countU[i]) % 2 === 0
      ) {
        ans = j - i;
      }
    }
  }

  return ans;
}