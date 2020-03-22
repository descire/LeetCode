/**
 * https://leetcode-cn.com/problems/cinema-seat-allocation/submissions/
 * 
 * 5349. 安排电影院座位
 * 
 * Medium
 * 
 * 360ms 100.00%
 * 49.4mb 100.00%
 */
const maxNumberOfFamilies = (n, reservedSeats) => {
  const seats = [];
  for (let i = 0, max = reservedSeats.length ; i < max; i++) {
    const item = reservedSeats[i];
    if (!seats[item[0] - 1]) {
      seats[item[0] - 1] = new Set();
    }
    seats[item[0] - 1].add(item[1]);
  }
  let ans = 0;

  for (let i = 0, max = seats.length; i < max; i++) {
    const record = seats[i];
    if (record === undefined) {
      ans += 2;
      continue;
    }
    if (!record.has(2) && !record.has(3) && !record.has(4) && !record.has(5) && !record.has(6) && !record.has(7) && !record.has(8) && !record.has(9)) {
      ans += 2;
    } else if ((!record.has(2) && !record.has(3) && !record.has(4) && !record.has(5)) || (!record.has(6) && !record.has(7) && !record.has(8) && !record.has(9))) {
      ans += 1;
    } else if (!record.has(4) && !record.has(5) && !record.has(6) && !record.has(7)) {
      ans += 1;
    }
  }
  ans += (n - seats.length) * 2;
  return ans;
}