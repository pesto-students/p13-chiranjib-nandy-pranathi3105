/**
 * Recursive function to find all possible subsequences of a string.
 *
 * @param {string} str - The input string.
 * @param {number} index - The current index while generating subsequences.
 * @returns {string[]} An array of strings representing all possible subsequences.
 */
function subsequenceRecursive(str, index = 0) {
    if (index === str.length) {
      return ['']; // Return an array with an empty string as base case
    }
  
    const currentChar = str[index];
  
    // Recursive calls to include or exclude the current character
    const subsequencesWithoutCurrent = subsequenceRecursive(str, index + 1);
    const subsequencesWithCurrent = subsequencesWithoutCurrent.map(subseq => currentChar + subseq);
  
    // Combine results of both recursive calls
    return [...subsequencesWithoutCurrent, ...subsequencesWithCurrent];
  }
  
  /**
   * Main function to generate all possible subsequences of a given string.
   *
   * @param {string} str - The input string.
   * @returns {string[]} An array of strings representing all possible subsequences.
   */
  function subsequenceMain(str) {
    return subsequenceRecursive(str);
  }
  
  // Example usage:
  const input1 = 'abc';
  const input2 = 'hello';
  
  console.log("Test Case 1:");
  console.log(subsequenceMain(input1)); // Expected output: [, a, b, ab, c, ac, bc, abc]
  
  console.log("\nTest Case 2:");
  console.log(subsequenceMain(input2)); // Expected output: [, h, e, eh, l, lh, le, leh, l, lh, lo, loh, ll, llh, lle, lleh, ll, llh, llo, lloh, o, oh, ol, olh, oll, ollh, olle, olleh]
  