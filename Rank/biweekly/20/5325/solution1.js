/**
 * https://leetcode-cn.com/problems/number-of-substrings-containing-all-three-characters/
 * 
 * 5325. 包含所有三种字符的子字符串数目
 * 
 * Medium
 * 
 * TimeLimit
 */
const numberOfSubstrings = s => {
  let ans = 0;
  const max = s.length;
  for (let i = 0; i < max; i++) {
    let hasA = false;
    let hasB = false;
    let hasC = false;
    for (let j = i; j < max && !(hasC && hasB && hasA); j++) {
      if (s[j] === 'a') {
        hasA = true;
      }
  
      if (s[j] === 'b') {
        hasB = true;
      }
  
      if (s[j] === 'c') {
        hasC = true;
      }
      if (hasA && hasB && hasC) {
        ans += max - j;
      }
    }
  }

  return ans;
}