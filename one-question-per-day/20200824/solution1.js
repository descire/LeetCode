const repeatedSubstringPattern = function(s) {
  let len = s.length;
  const halfLength = Math.floor(len / 2);
  for (let i = 0; i < halfLength; i++) {
    const repeatCount = Math.floor(len / (i + 1));
    const sub = s.substr(0, i + 1);
    if (sub.repeat(repeatCount) === s) {
      return true;
    }
  }

  return false;
};