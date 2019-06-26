function binarySearch(arr, target) {
  let start = 0
  let end = arr.length - 1

  while (start < end) {
    const mid = Math.floor(start + (end - start) / 2)
    if (arr[mid] < target) {
      start = mid + 1
    } else {
      end = mid
    }
  }
  
  return start
}

console.log(binarySearch([0, 1, 2, 3, 4, 5], 5))