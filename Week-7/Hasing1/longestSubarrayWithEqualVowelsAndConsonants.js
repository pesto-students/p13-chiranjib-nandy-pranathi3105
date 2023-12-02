function isVowel(char) {
    const vowels = "aeiouAEIOU";
    return vowels.includes(char);
}

function longestSubarrayWithEqualVowelsAndConsonants(arr) {
    if (arr.length === 0) {
        return 0;
    }

    const prefixSums = new Map();
    prefixSums.set(0, -1);
    let maxLen = 0;
    let vowelCount = 0;
    let consonantCount = 0;

    for (let i = 0; i < arr.length; i++) {
        if (isVowel(arr[i])) {
            vowelCount++;
        } else {
            consonantCount++;
        }

        const difference = vowelCount - consonantCount;

        if (prefixSums.has(difference)) {
            maxLen = Math.max(maxLen, i - prefixSums.get(difference));
        } else {
            prefixSums.set(difference, i);
        }
    }

    return maxLen;
}

// Prompt the user for input
const input = prompt("Enter a string: ");

// Call the function and output the result
const characters = input.split('');
const result = longestSubarrayWithEqualVowelsAndConsonants(characters);
console.log(result);
