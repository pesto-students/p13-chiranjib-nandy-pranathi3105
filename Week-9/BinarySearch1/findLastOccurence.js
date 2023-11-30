function lastOccurrence(arr, target) {
    let low = 0;
    let high = arr.length - 1;
    let result = -1;
  
    while (low <= high) {
      let mid = Math.floor((low + high) / 2);
  
      if (arr[mid] === target) {
        result = mid;
        low = mid + 1; // Update "low" to search on the right side
      } else if (arr[mid] < target) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }
  
    return result;
  }
  
  // Read input from the user
  const inputArray = prompt("Enter the sorted array of integers separated by spaces:")
    .split(' ')
    .map(Number);
  const targetValue = parseInt(prompt("Enter the target value:"));
  
  // Find the last occurrence of the target value in the array
  const lastIndex = lastOccurrence(inputArray, targetValue);
  
  // Display the output
  console.log(`Sample Output: ${lastIndex}`);
  