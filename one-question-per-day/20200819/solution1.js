/**
 * 
 * 时间复杂度 O(n^2)
 */
const countSubstrings = function(s) {
  let ans = 0;

  for (let i = 0; i < s.length; i++) {
    for (let j = i; j < s.length; j++) {
      if (isValid(s, i, j)) {
        ans++;
      }
    }
  }
  return ans;
};

function isValid(str, startIndex, endIndex) {
  while (startIndex <= endIndex) {
    if (str[startIndex] !== str[endIndex]) {
      return false;
    }
    startIndex++;
    endIndex--;
  }
  return true;
}