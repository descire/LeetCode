const reverseWords = function(s) {
  return s.split(' ').map(item => item.split('').reverse().join('')).join(' ');
};