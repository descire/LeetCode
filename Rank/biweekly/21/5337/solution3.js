/**
 * https://leetcode-cn.com/problems/find-the-longest-substring-containing-vowels-in-even-counts/
 * 
 * 5337. 每个元音包含偶数次的最长子字符串
 * 
 * Medium
 * 
 * 104ms 100.00%
 * 39.9mb 100.00%
 */
const findTheLongestSubstring = s => {
  const state = Array(32);
  let currentCount = 0;
  let ans = 0;
  state[0] = -1;
  for (let i = 0, max = s.length; i < max; i++) {
    switch(s[i]) {
      case 'a':
        currentCount ^= Math.pow(2, 0);
        break;
      case 'e':
        currentCount ^= Math.pow(2, 1);
        break;
      case 'i':
        currentCount ^= Math.pow(2, 2);
        break;
      case 'o':
        currentCount ^= Math.pow(2, 3);
        break;
      case 'u':
        currentCount ^= Math.pow(2, 4);
        break;
      default:
        break;
    }

    if (state[currentCount] === undefined) {
      state[currentCount] = i;
    } else {
      ans = Math.max(ans, i - state[currentCount])
    }
  }

  return ans;
}