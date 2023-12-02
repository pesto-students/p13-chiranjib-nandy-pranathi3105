function power(x, p) {
    // Base case: if the exponent is 0, return 1
    if (p === 0) {
      return 1;
    }
    
    // Recursive step: multiply x by the result of x^(p-1)
    return x * power(x, p - 1);
  }
  
  // Function to take user input and perform exponentiation
  function calculateExponentiation() {
    const x = parseInt(prompt("Enter the base (positive integer):"));
    const p = parseInt(prompt("Enter the exponent (positive integer):"));
  
    // Check if both x and p are positive integers
    if (Number.isInteger(x) && Number.isInteger(p) && x > 0 && p >= 0) {
      const result = power(x, p);
      console.log(`Result: ${result}`);
    } else {
      console.log("Please enter valid positive integers.");
    }
  }
  
  // Example usage
  calculateExponentiation();
  