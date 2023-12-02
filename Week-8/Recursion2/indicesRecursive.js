/**
 * Recursive function to find all indices of occurrences of the target in the array.
 *
 * @param {number[]} arr - The input array of integers.
 * @param {number} target - The target value to find.
 * @param {number} index - The current index being checked.
 * @returns {number[]} An array of indices where the target is found.
 */
function indicesRecursive(arr, target, index = 0) {
    if (index === arr.length) {
      return []; // Return an empty array if the index exceeds array length
    }
  
    const currentElement = arr[index];
  
    // Recursive call to search for the target in the rest of the array
    const indicesFromNext = indicesRecursive(arr, target, index + 1);
  
    // If the current element matches the target, include its index in the result
    if (currentElement === target) {
      return [index, ...indicesFromNext];
    }
  
    return indicesFromNext; // Otherwise, continue searching in the remaining elements
  }
  
  /**
   * Main function to find all indices of occurrences of the target in the array.
   *
   * @param {number[]} arr - The input array of integers.
   * @param {number} target - The target value to find.
   * @returns {number[]} An array of indices where the target is found.
   */
  function indicesMain(arr, target) {
    return indicesRecursive(arr, target);
  }
  
  // Example usage:
  const array = [1, 2, 3, 4, 5, 2, 6, 2];
  const targetValue = 2;
  
  console.log("Output:");
  console.log(indicesMain(array, targetValue)); // Expected output: [1, 5, 7]
  