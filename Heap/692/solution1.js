/**
 * https://leetcode-cn.com/problems/top-k-frequent-words/
 * 
 * 692. 前K个高频单词
 * 
 * Medium
 * 
 * 76ms 97.98%
 * 37.9mb 12.50%
 */
const topKFrequent = (words, k) => {
  // 总结单词出现的频率 O(n)
  const record = new Map();
  for (let i =0, max = words.length; i < max; i++) {
    const word = words[i];
    if (!record.has(word)) {
      record.set(word, 0);
    }
    record.set(word, record.get(word) + 1);
  }

  const temp = [];
  for (let [key, value] of record.entries()) {
    temp.push({ key, value});
  }

  temp.sort((a, b) => {
    if (a.value === b.value) {
      return a.key > b.key ? 1 : -1;
    } else {
      return a.value > b.value ? -1 : 1;
    }
  })
  
  return temp.slice(0, k).map(item => item.key);
}