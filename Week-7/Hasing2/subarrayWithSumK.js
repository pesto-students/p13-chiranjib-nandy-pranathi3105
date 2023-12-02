function subarrayWithSumK(nums, target) {
    const sumMap = new Map();
    let sum = 0;
  
    for (let i = 0; i < nums.length; i++) {
      sum += nums[i];
  
      // If the current sum equals the target or if the difference (sum - target) exists in the map
      if (sum === target || sumMap.has(sum - target)) {
        return true;
      }
  
      // Store the cumulative sum in the map
      sumMap.set(sum, true);
    }
  
    // If no subarray found, return false
    return false;
  }
  
  // Taking input from the user
  const input = prompt("Enter space-separated integers for the array elements:");
  const nums = input.split(" ").map(Number);
  
  const target = parseInt(prompt("Enter the target sum:"));
  
  // Check if a subarray with the target sum exists
  const existsSubarray = subarrayWithSumK(nums, target);
  
  // Display the output
  console.log(existsSubarray);
  