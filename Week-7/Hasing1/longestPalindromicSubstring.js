function longestPalindromicSubstring(s) {
    if (s.length <= 1) {
        return s;
    }

    let start = 0;
    let maxLen = 1;

    // Function to expand around a center
    function expandAroundCenter(left, right) {
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            if (right - left + 1 > maxLen) {
                start = left;
                maxLen = right - left + 1;
            }
            left--;
            right++;
        }
    }

    for (let i = 0; i < s.length; i++) {
        expandAroundCenter(i, i); // Odd length palindrome
        expandAroundCenter(i, i + 1); // Even length palindrome
    }

    return s.substring(start, start + maxLen);
}

// Prompt the user for input
const input = prompt("Enter a string: ");

// Call the function and output the result
const result = longestPalindromicSubstring(input);
console.log(result);
