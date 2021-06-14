const guessNumber = function(n) {
    let start = 0;
    let end = n;
    while (start < end) {
      const mid = Math.floor(start + (end - start) / 2);
      const item = guess(mid);
      if (item === 1) {
        start = mid + 1;
      } else if (item === -1) {
        end = mid;
      } else {
        return mid;
      }
    }

    return start;
};