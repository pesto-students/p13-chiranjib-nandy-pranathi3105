function firstNonRepeatingChar(str) {
    const charCount = {};
  
    // Count occurrences of each character in the string
    for (let i = 0; i < str.length; i++) {
      const char = str[i];
      charCount[char] = (charCount[char] || 0) + 1;
    }
  
    // Find the first character with only one occurrence
    for (let i = 0; i < str.length; i++) {
      const char = str[i];
      if (charCount[char] === 1) {
        return char;
      }
    }
  
    // If no non-repeating character found, return a message
    return "No non-repeating characters found";
  }
  
  // Taking input from the user
  const input = prompt("Enter a string:");
  const inputString = input.trim();
  
  // Find the first non-repeating character
  const result = firstNonRepeatingChar(inputString);
  
  // Display the output
  console.log("First non-repeating character:", result);
  