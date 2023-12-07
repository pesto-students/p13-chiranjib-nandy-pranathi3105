function findPeakElement(nums) {
    let start = 0;
    let end = nums.length - 1;
  
    while (start <= end) {
      let middle = Math.floor((start + end) / 2);
  
      if (
        (middle === 0 || nums[middle] > nums[middle - 1]) &&
        (middle === nums.length - 1 || nums[middle] > nums[middle + 1])
      ) {
        return middle;
      } else if (
        middle < nums.length - 1 &&
        nums[middle] < nums[middle + 1]
      ) {
        start = middle + 1;
      } else {
        end = middle - 1;
      }
    }
  
    return -1; // No peak element found
  }
  
  // Example usage:
  const nums = [6,1,2,1,3,5,6,4];
  const peakIndex = findPeakElement(nums);
  console.log("Sample Output:", peakIndex);
  