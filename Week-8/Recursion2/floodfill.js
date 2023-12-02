function findPaths(m, n) {
    function findPathsUtil(row, col, path) {
      if (row === m - 1 && col === n - 1) {
        result.push(path);
        return;
      }
  
      if (row >= m || col >= n) {
        return;
      }
  
      findPathsUtil(row + 1, col, path + 'D'); // Move down
      findPathsUtil(row, col + 1, path + 'R'); // Move right
    }
  
    let result = [];
    findPathsUtil(0, 0, '');
    return result;
  }
  
  // Replace these values with your desired dimensions or input method
  let rows = 3;
  let columns = 3;
  
  // Getting paths for the given maze dimensions
  let paths = findPaths(rows, columns);
  
  // Displaying the obtained paths
  console.log(paths);
  