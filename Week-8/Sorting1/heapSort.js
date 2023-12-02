function heapify(arr, n, i) {
    let largest = i; // Initialize largest as root
    let left = 2 * i + 1; // left child
    let right = 2 * i + 2; // right child
  
    // If left child is larger than root
    if (left < n && arr[left] > arr[largest]) {
      largest = left;
    }
  
    // If right child is larger than largest so far
    if (right < n && arr[right] > arr[largest]) {
      largest = right;
    }
  
    // If largest is not root
    if (largest !== i) {
      // Swap the elements
      let temp = arr[i];
      arr[i] = arr[largest];
      arr[largest] = temp;
  
      // Recursively heapify the affected sub-tree
      heapify(arr, n, largest);
    }
  }
  
  function heapSort(arr) {
    const n = arr.length;
  
    // Build heap (rearrange array)
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
      heapify(arr, n, i);
    }
  
    // One by one extract an element from heap
    for (let i = n - 1; i > 0; i--) {
      // Move current root to end
      let temp = arr[0];
      arr[0] = arr[i];
      arr[i] = temp;
  
      // Call max heapify on the reduced heap
      heapify(arr, i, 0);
    }
  
    return arr;
  }
  
  // Example usage:
  let array = [12, 11, 13, 5, 6, 7];
  console.log("Original Array:");
  console.log(array);
  
  // Sorting the array using Heap Sort
  heapSort(array);
  console.log("Sorted Array:");
  console.log(array);
  