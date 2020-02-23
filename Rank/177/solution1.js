const daysBetweenDates = (date1, date2) => {
  const [y1, m1, d1] = date1.split('-');
  const [y2, m2, d2] = date2.split('-');
  const time1 = new Date(y1, m1 - 1, d1, 0, 0, 0);
  const time2 = new Date(y2, m2 - 1, d2, 0, 0, 0);
  const timestamp = Math.abs(time2 - time1);

  return timestamp / (24 * 60 * 60 * 1000);
}


console.log(daysBetweenDates('2020-01-15', '2019-12-31'))
console.log(daysBetweenDates('2019-06-29', '2019-06-30'))