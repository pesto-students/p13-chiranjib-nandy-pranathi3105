function collectCoins(grid) {
    const rows = grid.length;
    const cols = grid[0].length;
  
    // Function to check if it's possible to collect 'target' or more coins
    function canCollect(target) {
      const dp = Array.from({ length: rows }, () => Array(cols).fill(0));
      dp[0][0] = grid[0][0] >= target ? 1 : 0;
  
      // Fill the first row
      for (let i = 1; i < cols; i++) {
        dp[0][i] = dp[0][i - 1] + (grid[0][i] >= target ? 1 : 0);
      }
  
      // Fill the first column
      for (let i = 1; i < rows; i++) {
        dp[i][0] = dp[i - 1][0] + (grid[i][0] >= target ? 1 : 0);
      }
  
      // Fill the rest of the grid
      for (let i = 1; i < rows; i++) {
        for (let j = 1; j < cols; j++) {
          dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]) + (grid[i][j] >= target ? 1 : 0);
        }
      }
  
      return dp[rows - 1][cols - 1] > 0;
    }
  
    let left = 0;
    let right = Math.max(...grid);
  
    let maxCoins = 0;
  
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      if (canCollect(mid)) {
        maxCoins = mid;
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  
    return maxCoins;
  }
  
  // Example usage:
  const maze = [
    [1, 3, 1],
    [1, 5, 1],
    [4, 2, 1]
  ];
  
  const maxCollectedCoins = collectCoins(maze);
  console.log("Maximum number of coins collected:", maxCollectedCoins);
  