/**
 * https://leetcode-cn.com/problems/short-encoding-of-words/
 * 
 * 820. 单词的压缩编码
 * 
 * Medium
 * 
 * 96ms 89.47%
 * 43mb 100.00%
 * 
 * 1、哈希表
 * 2、后缀
 */
const minimumLengthEncoding = words => {
  const record = new Set();

  for (let i = 0; i < words.length; i++) {
    record.add(words[i]);
  }

  for (const values of record.values()) {
    for (let i = 1; i < values.length; i++) {
      record.delete(values.slice(i));
    }
  }

  let ans = 0;
  for (const values of record.values()) {
    ans += values.length + 1;
  }
  return ans;
}