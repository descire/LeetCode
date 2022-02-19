/**
 * 时间复杂度：O(n*2^n)
 * 空间复杂度：O(2^n)
 */
const partition = s => {
  const max = s.length
  const ans = []
  const path = []

  backtrack(s, 0, path, ans, max);
  return ans
}

function backtrack(str, position, path, ans, max) {
  if (position === max) {
    return ans.push([...path]);
  }

  for (let i = position; i < max; i++) {
    if (isPalindrome(str, position, i)) {
      path.push(str.substring(position, i + 1))
      backtrack(str, i + 1, path, ans, max);
      path.pop();
    } 
  }
}

function isPalindrome(str, start, end) {
  while (start < end) {
    if (str[start] === str[end]) {
      start++;
      end--;
    } else {
      return false;
    }
  }

  return true;
}