const peakIndexInMountainArray = arr => {
  let start = 0;
  let end = arr.length - 1;

  while (start < end) {
    const mid = Math.floor(start + (end - start + 1) / 2);
    if (arr[mid] > arr[mid - 1]) {
      start = mid;
    } else {
      end = mid - 1;
    }
  }

  return start;
}