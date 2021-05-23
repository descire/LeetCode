/**
 * @param {string} s
 * @return {boolean}
 */
const checkZeroOnes = function(s) {
  let preStr = null;
  let currentLen = 0;
  let max0 = 0;
  let max1 = 0;

  for (let i = 0; i < s.length; i++) {
    const item = s[i];
    if (item === preStr) {
      currentLen++;
    } else {
      if (preStr === '0') {
        max0 = Math.max(max0, currentLen);
      } else if (preStr === '1') {
        max1 = Math.max(max1, currentLen);
      }
      currentLen = 1;
    }

    preStr = item;
  };

  if (preStr === '0') {
    max0 = Math.max(max0, currentLen);
  }

  if (preStr === '1') {
    max1 = Math.max(max1, currentLen);
  }
  
  return max1 > max0;
};