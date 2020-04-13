/**
 * https://leetcode-cn.com/problems/string-matching-in-an-array/
 * 
 * 数组中的字符串匹配
 * 
 * Easy
 * 
 * 100ms
 * 
 * 34.6mb
 * 
 * 时间复杂度 O(n^2)
 * 
 * 空间复杂度 O(n)
 */
const stringMatching = words => {
  let ans = [];
  const max = words.length;
  for (let i = 0; i < max; i++) {
    const item = words[i];
    let isSub = false;
    for (let j = 0; j < max; j++) {
      if (i === j) {
        continue
      }
      if (words[j].indexOf(item) !== -1) {
        isSub = true;
        break;
      }
    }
    isSub && ans.push(item);
  }
  return ans;
}