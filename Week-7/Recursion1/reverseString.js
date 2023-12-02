function reverseString(str) {
    // Base case: if the string length is 0 or 1, return the string itself
    if (str.length <= 1) {
      return str;
    }
  
    // Recursive step: reverse the substring excluding the first character
    // Concatenate the first character to the end of the reversed substring
    return reverseString(str.substr(1)) + str.charAt(0);
  }
  
  // Example usage
  const inputString = "hello";
  
  // Reverse the input string using the recursive function
  const reversedString = reverseString(inputString);
  
  // Display the output
  console.log(reversedString);
  