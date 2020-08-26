/**
 * DFS 枚举
 * 
 * 时间复杂度 3^m * 4^n
 * 空间复杂度 m + n
 */
const record = new Map();
record.set('2', ['a', 'b', 'c']);
record.set('3', ['d', 'e', 'f']);
record.set('4', ['g', 'h', 'i']);
record.set('5', ['j', 'k', 'l']);
record.set('6', ['m', 'n', 'o']);
record.set('7', ['p', 'q', 'r', 's']);
record.set('8', ['t', 'u', 'v']);
record.set('9', ['w', 'x', 'y', 'z']);

const letterCombinations = function(digits) {
  const ans = [];
  if (!digits) {
    return ans;
  }
  dfs(0, digits.length - 1, '');
  return ans;
  function dfs(startIndex, endIndex, path) {
    if (path.length === digits.length) {
      ans.push(path);
      return;
    }
    for (let i = startIndex; i <= endIndex; i++) {
      const item =  record.get(digits[i]);
      for (let j = 0; j < item.length; j++) {
        dfs(i + 1, endIndex, path + item[j]);
      }
    }
  }
};