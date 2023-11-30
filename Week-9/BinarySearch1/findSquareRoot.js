function findSquareRoot(N) {
    let start = 0;
    let end = N;
    let ans = 0.0;
  
    while (start <= end) {
      let mid = start + (end - start) / 2;
      let midSquared = mid * mid;
  
      if (midSquared === N) {
        ans = mid;
        break;
      } else if (midSquared < N) {
        ans = mid;
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }
  
    return ans.toFixed(6);
  }
  
  // Get user input for the positive integer
  const N = parseInt(prompt("Enter a positive integer:"));
  
  // Find the square root using binary search
  const squareRoot = findSquareRoot(N);
  
  // Display the square root rounded to 6 decimal places
  console.log(`Square root of ${N} is: ${squareRoot}`);
  