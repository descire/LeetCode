
/**
 * https://leetcode-cn.com/problems/the-k-th-lexicographical-string-of-all-happy-strings-of-length-n/
 * 
 * 长度为 n 的开心字符串中字典序第 k 小的字符串
 * 
 * Medium
 * 
 * 时间复杂度 O(2^n)
 * 空间复杂度 O(n)
 */
const str = ['a', 'b', 'c']
const getHappyString = (n, k) => {
  let list = [];
  help('', '', n);
  return list[k - 1] || '';

  function help(prestr, current, count) {
    if (count === 0) {
      list.push(current);
      return;
    }
    for (let i = 0; i < 3; i ++) {
      if (prestr !== str[i]) {
        help(str[i], current + str[i], count - 1);
      }
    }
  }
}