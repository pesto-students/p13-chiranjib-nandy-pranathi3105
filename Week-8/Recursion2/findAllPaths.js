/**
 * Recursive function to find all possible paths in a maze.
 *
 * @param {number} row - Current row in the maze.
 * @param {number} col - Current column in the maze.
 * @param {number} numRows - Number of rows in the maze.
 * @param {number} numCols - Number of columns in the maze.
 * @param {string} path - Current path in the maze.
 * @returns {string[]} An array of strings representing all possible paths.
 */
function findAllPaths(row, col, numRows, numCols, path) {
    if (row === numRows - 1 && col === numCols - 1) {
      return [path]; // Reached the bottom-right corner, add current path to result
    }
  
    if (row >= numRows || col >= numCols) {
      return []; // If out of bounds, return an empty array
    }
  
    // Recursive call for moving down (increment row and add 'D' to the path)
    const downPaths = findAllPaths(row + 1, col, numRows, numCols, path + 'D');
  
    // Recursive call for moving right (increment col and add 'R' to the path)
    const rightPaths = findAllPaths(row, col + 1, numRows, numCols, path + 'R');
  
    // Combine results of both recursive calls and return
    return [...downPaths, ...rightPaths];
  }
  
  /**
   * Main function to find all possible paths in a maze.
   *
   * @param {number} numRows - Number of rows in the maze.
   * @param {number} numCols - Number of columns in the maze.
   * @returns {string[]} An array of strings representing all possible paths.
   */
  function findAllPathsMain(numRows, numCols) {
    return findAllPaths(0, 0, numRows, numCols, '');
  }
  
  // Example usage:
  const maze1Rows = 3;
  const maze1Cols = 3;
  
  const maze2Rows = 2;
  const maze2Cols = 2;
  
  console.log("Test Case 1:");
  console.log(findAllPathsMain(maze1Rows, maze1Cols)); // Expected output: ["RRDD", "RDRD", "RDDR", "DRRD", "DRDR", "DDRR"]
  
  console.log("\nTest Case 2:");
  console.log(findAllPathsMain(maze2Rows, maze2Cols)); // Expected output: ["RD", "DR"]
  