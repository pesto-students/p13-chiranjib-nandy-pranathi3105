function isTargetPresent(arr, target) {
    let low = 0;
    let high = arr.length - 1;
  
    while (low <= high) {
      let mid = Math.floor((low + high) / 2);
  
      if (arr[mid] === target) {
        return true;
      } else if (arr[mid] < target) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }
  
    return false;
  }
  
  // Read input from the user
  const inputArray = prompt("Enter the sorted array of integers separated by spaces:")
    .split(' ')
    .map(Number);
  const targetValue = parseInt(prompt("Enter the target value:"));
  
  // Check if the target value is present in the array
  const isPresent = isTargetPresent(inputArray, targetValue);
  
  // Display the output
  console.log(`Sample Output: ${isPresent}`);
  