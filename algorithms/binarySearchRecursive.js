const binarySearch = (arr, val, start = 0, end = arr.length - 1) => {
  const mid = Math.floor((start + end) / 2);

  if (val === arr[mid]) return mid;

  if (start >= end) return -1;

  return val < arr[mid]
    ? binarySearch(arr, val, start, mid - 1)
    : binarySearch(arr, val, mid + 1, end);
};

const arr = [1, 9, 5, 7, 2, 4, 8, 6].sort();

const result = binarySearch(arr, 2);

console.log(result !== -1 ? `Element is present at index ${result}` : 'Element is not present in array');
