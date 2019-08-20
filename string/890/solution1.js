/**
 * https://leetcode-cn.com/problems/find-and-replace-pattern/
 * 
 * 890. 查找和替换模式
 * 
 * Medium
 * 
 * 84ms 94.74%
 * 36.4mb 33.33%
 */
const findAndReplacePattern = (words, pattern) => {
  const ans = [];

  for (let i = 0, max = words.length; i < max; i++) {
    const word = words[i];
    const len = word.length;
    // 双字典确保一致
    const wMap = new Map(); // word ---> pattern
    const pMap = new Map(); // pattern ---> word
    let isComplete = true;
    for (let j = 0; j < len; j++) {
      const pitem = wMap.get(word[j]);
      const witem = pMap.get(pattern[j]);
      if (pitem === witem && pitem === undefined) {
        wMap.set(word[j], pattern[j]);
        pMap.set(pattern[j], word[j]);
      } else if (pitem === pattern[j] && witem === word[j]) {
      } else {
        isComplete = false
        break;
      }
    }
    if (isComplete) {
      ans.push(word);
    }
  }
  return ans;
}