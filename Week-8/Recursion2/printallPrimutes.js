function solveNQueens(n) {
    function isSafe(row, col, queens) {
      // Check if no queens are placed in the same column
      for (let i = 0; i < row; i++) {
        if (queens[i][1] === col) {
          return false;
        }
        // Check diagonals
        if (Math.abs(queens[i][0] - row) === Math.abs(queens[i][1] - col)) {
          return false;
        }
      }
      return true;
    }
  
    function solve(row, queens, result) {
      if (row === n) {
        // All queens are successfully placed
        result.push([...queens]);
        return;
      }
  
      for (let col = 0; col < n; col++) {
        if (isSafe(row, col, queens)) {
          queens.push([row, col]);
          solve(row + 1, queens, result);
          queens.pop(); // Backtrack
        }
      }
    }
  
    let result = [];
    solve(0, [], result);
    return result;
  }
  
  // Test Cases
  let n1 = 4;
  console.log(solveNQueens(n1)); // Output: [[0, 1], [1, 3], [2, 0], [3, 2]] and [[0, 2], [1, 0], [2, 3], [3, 1]]
  
  