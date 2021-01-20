function bubbleSort(arr, iteration) {
  if (iteration === 0) return;

  bubbleSwap(arr, 0, 1, iteration);
  bubbleSort(arr, iteration - 1);
}


function bubbleSwap(arr, i, j, n) {

  if (j >= n) return;

  // swap
  if (arr[i] > arr[j]) [arr[i], arr[j]] = [arr[j], arr[i]];


  bubbleSwap(arr, i + 1, j + 1, n);
}


function sort(arr) {
  const n = arr.length;

  if (n <= 1) return;

  bubbleSort(arr, n);

}

const arr = [1, 8, 6, 5, 4, 9];

sort(arr);

console.log(arr)
