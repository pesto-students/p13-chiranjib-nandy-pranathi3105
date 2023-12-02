function findFirstNonRepeatingCharacter(input) {
    const charCount = {}; // Object to store character counts
  
    // Count the occurrences of each character in the string
    for (const char of input) {
      if (charCount[char]) {
        charCount[char]++;
      } else {
        charCount[char] = 1;
      }
    }
  
    // Find the first non-repeating character
    for (const char of input) {
      if (charCount[char] === 1) {
        return char;
      }
    }
  
    // If no non-repeating character is found, return an empty string
    return '';
  }
  
  // Example usage:
  const input1 = 'abbcadef';
  const result1 = findFirstNonRepeatingCharacter(input1);
  console.log(result1); // Output: "c"
  
  const input2 = 'xyzxyz';
  const result2 = findFirstNonRepeatingCharacter(input2);
  console.log(result2); // Output: "x"
  