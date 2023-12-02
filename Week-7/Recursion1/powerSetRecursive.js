/**
 * Generate the power set of a given array using recursion.
 *
 * @param {number[]} nums - The input array.
 * @param {number} index - Current index while generating subsets.
 * @param {number[]} subset - Current subset being processed.
 * @param {number[][]} powerSet - Collection of subsets (power set).
 */
function powerSetRecursive(nums, index, subset, powerSet) {
    if (index === nums.length) {
      powerSet.push(subset.slice()); // Push a copy of subset to powerSet
      return;
    }
  
    // Exclude the number at the current index
    powerSetRecursive(nums, index + 1, subset, powerSet);
  
    // Include the number at the current index
    subset.push(nums[index]);
    powerSetRecursive(nums, index + 1, subset, powerSet);
    subset.pop(); // Backtrack to the previous state of subset
  }
  
  /**
   * Main function to generate the power set of a given array.
   *
   * @param {string} input - The input array elements (space-separated).
   * @return {number[][]} The power set of the input array.
   */
  function powerSetMain(input) {
    const nums = input.split(' ').map(Number);
    const powerSet = [];
    powerSetRecursive(nums, 0, [], powerSet);
    return powerSet;
  }
  
  // Example usage:
  const input = '1 2 3';
  const result = powerSetMain(input);
  console.log("Output:");
  console.log(result);
  