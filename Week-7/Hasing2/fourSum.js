function fourSum(nums, target) {
    nums.sort((a, b) => a - b);
    const result = [];
  
    for (let i = 0; i < nums.length - 3; i++) {
      for (let j = i + 1; j < nums.length - 2; j++) {
        let left = j + 1;
        let right = nums.length - 1;
  
        while (left < right) {
          const sum = nums[i] + nums[j] + nums[left] + nums[right];
  
          if (sum === target) {
            result.push([nums[i], nums[j], nums[left], nums[right]]);
  
            // Move pointers to avoid duplicates
            while (left < right && nums[left] === nums[left + 1]) left++;
            while (left < right && nums[right] === nums[right - 1]) right--;
  
            left++;
            right--;
          } else if (sum < target) {
            left++;
          } else {
            right--;
          }
        }
  
        // Skip duplicate values for the second number
        while (j < nums.length - 2 && nums[j] === nums[j + 1]) j++;
      }
  
      // Skip duplicate values for the first number
      while (i < nums.length - 3 && nums[i] === nums[i + 1]) i++;
    }
  
    return result;
  }
  
  // Taking input from the user
  const input = prompt("Enter array of integers separated by commas:");
  const nums = input.split(",").map(Number);
  
  const target = parseInt(prompt("Enter the target sum:"));
  
  // Find all unique quadruplets that sum up to the target
  const result = fourSum(nums, target);
  
  // Display the output
  console.log(result);
  