/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
function transposeMatrix(matrix) {
    // PLACEHOLDER_JAVASCRIPT_TRANSPOSE_MATRIX_BODY
    const transposedMatrix = [];
  
    // Iterate through the columns of the original matrix.
    for (let i = 0; i < matrix[0].length; i++) {
      // Create a new row in the transposed matrix.
      const row = [];
  
      // Add the elements of the current column of the original matrix to the
      // corresponding row of the transposed matrix.
      for (let j = 0; j < matrix.length; j++) {
        row.push(matrix[j][i]);
      }
  
      transposedMatrix.push(row);
    }
  
    return transposedMatrix;
  }
  
  /**
   * @param {number[][]} matrix
   */
  function displayMatrix(matrix) {
    console.log('Matrix:');
    for (let i = 0; i < matrix.length; i++) {
      console.log(matrix[i].join('\\t'));
    }
  }
  
  /**
   * @param {string} rows
   * @param {string} cols
   * @param {string[]} elements
   */
  function takeMatrixInput(rows, cols, elements) {
    const input = JSON.stringify({ 'rows': rows, 'cols': cols, ...elements });
    return input;
  }
  // Define the original matrix.
const matrix = [[1, 2], [3,4]];
// Transpose the matrix.
const transposedMatrix = transposeMatrix(matrix);

// Print the transposed matrix.
console.log(transposedMatrix);