function spiralOrderTraversal(matrix) {
    if (!matrix || matrix.length === 0) {
      return [];
    }
  
    const result = [];
    let top = 0;
    let bottom = matrix.length - 1;
    let left = 0;
    let right = matrix[0].length - 1;
  
    while (top <= bottom && left <= right) {
      // Traverse top row from left to right
      for (let i = left; i <= right; i++) {
        result.push(matrix[top][i]);
      }
      top++;
  
      // Traverse right column from top to bottom
      for (let i = top; i <= bottom; i++) {
        result.push(matrix[i][right]);
      }
      right--;
  
      // Traverse bottom row from right to left
      if (top <= bottom) {
        for (let i = right; i >= left; i--) {
          result.push(matrix[bottom][i]);
        }
        bottom--;
      }
  
      // Traverse left column from bottom to top
      if (left <= right) {
        for (let i = bottom; i >= top; i--) {
          result.push(matrix[i][left]);
        }
        left++;
      }
    }
  
    return result;
  }
  
  // Example usage
  const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  
  const result = spiralOrderTraversal(matrix);
  console.log('Spiral order traversal:', result); // Output: [1, 2, 3, 6, 9, 8, 7, 4, 5]
  