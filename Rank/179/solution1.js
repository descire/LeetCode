const generateTheString = n => {
  if (n % 2 === 0) {
    return Array(n - 1).fill('a').join('') + 'b';
  } else {
    return Array(n).fill('a').join('');
  }
}