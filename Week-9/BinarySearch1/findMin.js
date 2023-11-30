function findMin(nums) {
    let left = 0;
    let right = nums.length - 1;
  
    while (left < right) {
      let mid = Math.floor((left + right) / 2);
  
      if (nums[mid] > nums[right]) {
        left = mid + 1;
      } else {
        right = mid;
      }
    }
  
    return nums[left];
  }
  
  // Read input from the user
  const inputArray = prompt("Enter the array elements separated by spaces:")
    .split(' ')
    .map(Number);
  
  // Find the minimum element in the rotated sorted array
  const minElement = findMin(inputArray);
  
  // Display the output
  console.log(`Sample Output: ${minElement}`);
  