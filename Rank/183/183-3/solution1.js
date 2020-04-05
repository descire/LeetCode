/**
 * 
 * https://leetcode-cn.com/problems/longest-happy-string/submissions/
 * 
 * 最长快乐字符串
 * 
 * 72ms 100.00%
 * 35.7mb 100.00%
 */
const longestDiverseString = (a, b, c) => {
  let ans = '';
  const list = [['a', a], ['b', b], ['c', c]];
  list.sort((a, b) => b[1] - a[1]);
  let pre = ''
  let preCount = list[0][1];
  while(true) {
    let currentKey;
    for (let i = 0; i < 2; i++) {
      const [key, count] = list[i];
      if (count === 0) {
        continue
      }
      if (key === pre) {
        continue;
      }
      if (count === 1 || (count >= 2 && preCount > count)) {
        ans += key;
        list[i][1] -= 1;
      } else {
        ans += `${key}${key}`;
        list[i][1] -= 2;
      }
      preCount = list[i][1];
      currentKey = key;
      break;
    }
    
    let count = 0;
    for (let j = 0; j < 3; j++) {
      if (list[j][1] === 0) {
        count++;
      }
    }

    if (count >= 2 &&( pre === currentKey || currentKey === undefined)) {
      break;
    }

    pre = currentKey;
    list.sort((a, b) => b[1] - a[1]);
  }
  return ans;
}