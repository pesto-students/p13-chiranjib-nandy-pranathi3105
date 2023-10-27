function trapRainWater(heights) {
    if (!heights || heights.length < 3) {
      return 0;
    }
  
    let totalWater = 0;
    let left = 0;
    let right = heights.length - 1;
    let leftMax = 0;
    let rightMax = 0;
  
    while (left < right) {
      if (heights[left] < heights[right]) {
        if (heights[left] >= leftMax) {
          leftMax = heights[left];
        } else {
          totalWater += leftMax - heights[left];
        }
        left++;
      } else {
        if (heights[right] >= rightMax) {
          rightMax = heights[right];
        } else {
          totalWater += rightMax - heights[right];
        }
        right--;
      }
    }
  
    return totalWater;
  }
  
  // Example usage
  const heights = [0, 1, 0, 2, 1, 0, 1, 3];
  const result = trapRainWater(heights);
  console.log('Total trapped rainwater:', result); // Output: 5
  