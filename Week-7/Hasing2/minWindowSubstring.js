function minWindow(s, t) {
    const charCount = {};
    let required = t.length;
  
    // Count characters in the target string
    for (let char of t) {
      charCount[char] = (charCount[char] || 0) + 1;
    }
  
    let left = 0;
    let minWindowLength = Infinity;
    let minWindowStart = 0;
  
    for (let right = 0; right < s.length; right++) {
      const rightChar = s[right];
  
      if (charCount[rightChar] !== undefined) {
        charCount[rightChar]--;
  
        // If the character count becomes zero, decrement required count
        if (charCount[rightChar] >= 0) {
          required--;
        }
      }
  
      // Check if the current window contains all characters from t
      while (required === 0) {
        // Update the minimum window length and start index
        if (right - left + 1 < minWindowLength) {
          minWindowLength = right - left + 1;
          minWindowStart = left;
        }
  
        const leftChar = s[left];
        if (charCount[leftChar] !== undefined) {
          charCount[leftChar]++;
  
          // If the character count becomes greater than zero, increment required count
          if (charCount[leftChar] > 0) {
            required++;
          }
        }
  
        left++;
      }
    }
  
    // Return the minimum window substring or an empty string if not found
    return minWindowLength === Infinity ? '' : s.substr(minWindowStart, minWindowLength);
  }
  
  // Example input
  const str1 = "ADOBECODEBANC";
  const str2 = "ABC";
  
  // Find the minimum window substring
  const minWindowSubstring = minWindow(str1, str2);
  
  // Display the output
  console.log(minWindowSubstring);
  