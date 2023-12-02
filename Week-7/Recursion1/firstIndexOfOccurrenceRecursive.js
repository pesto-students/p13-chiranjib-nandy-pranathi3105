/**
 * Recursive function to find the first index of occurrence of the target in the array.
 *
 * @param {number[]} arr - The input array of integers.
 * @param {number} target - The target value to find.
 * @param {number} index - The current index being checked.
 * @returns {number} The first index of occurrence of the target, or -1 if not found.
 */
function firstIndexOfOccurrenceRecursive(arr, target, index) {
    // Base case: If the current index exceeds the array length, target not found
    if (index >= arr.length) {
      return -1;
    }
  
    // If the element at the current index matches the target, return the index
    if (arr[index] === target) {
      return index;
    }
  
    // Recursively search for the target in the remaining elements of the array
    return firstIndexOfOccurrenceRecursive(arr, target, index + 1);
  }
  
  /**
   * Main function to find the first index of occurrence of the target in the array.
   *
   * @param {number[]} arr - The input array of integers.
   * @param {number} target - The target value to find.
   * @returns {number} The first index of occurrence of the target, or -1 if not found.
   */
  function firstIndexOfOccurrenceMain(arr, target) {
    return firstIndexOfOccurrenceRecursive(arr, target, 0);
  }
  
  // Example usage:
  const array = [1, 2, 3, 4, 5];
  const targetValue = 5;
  const result = firstIndexOfOccurrenceMain(array, targetValue);
  console.log("Output:");
  console.log(result);
  