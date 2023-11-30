function kthElement(arr1, arr2, K) {
    let left = Math.min(arr1[0], arr2[0]);
    let right = Math.max(arr1[arr1.length - 1], arr2[arr2.length - 1]);
  
    while (left <= right) {
      let mid = Math.floor((left + right) / 2);
      let count = 0;
  
      // Count elements less than or equal to mid in both arrays
      for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] <= mid) {
          count++;
        }
      }
      for (let j = 0; j < arr2.length; j++) {
        if (arr2[j] <= mid) {
          count++;
        }
      }
  
      if (count < K) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  
    return left;
  }
  
  // Read input from the user
  const arr1 = prompt("Enter elements of arr1 separated by spaces:")
    .split(' ')
    .map(Number);
  const arr2 = prompt("Enter elements of arr2 separated by spaces:")
    .split(' ')
    .map(Number);
  const K = parseInt(prompt("Enter the value of K:"));
  
  // Find the K-th smallest element among the combined elements of arr1 and arr2
  const kthSmallest = kthElement(arr1, arr2, K);
  
  // Display the output
  console.log(`Sample Output: ${kthSmallest}`);
  