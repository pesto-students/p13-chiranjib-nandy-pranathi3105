function cocktailShakerSort(arr) {
    let n = arr.length;
    let swapped = true;
    let start = 0;
    let end = n - 1;
  
    while (swapped) {
      swapped = false;
  
      // Perform a bubble sort from left to right
      for (let i = start; i < end; i++) {
        if (arr[i] > arr[i + 1]) {
          let temp = arr[i];
          arr[i] = arr[i + 1];
          arr[i + 1] = temp;
          swapped = true;
        }
      }
  
      if (!swapped) {
        break;
      }
  
      swapped = false;
      end--;
  
      // Perform a bubble sort from right to left
      for (let i = end - 1; i >= start; i--) {
        if (arr[i] > arr[i + 1]) {
          let temp = arr[i];
          arr[i] = arr[i + 1];
          arr[i + 1] = temp;
          swapped = true;
        }
      }
  
      start++;
    }
  
    return arr;
  }
  console.log(cocktailShakerSort([4,3,6,9,2,7]))