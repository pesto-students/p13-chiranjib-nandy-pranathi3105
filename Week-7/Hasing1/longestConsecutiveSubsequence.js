function longestConsecutiveSubsequence(arr) {
    if (arr.length === 0) {
        return 0;
    }

    const numSet = new Set(arr);
    let longestLength = 0;

    for (const num of numSet) {
        if (!numSet.has(num - 1)) {
            let currentNum = num;
            let currentLength = 1;

            while (numSet.has(currentNum + 1)) {
                currentNum++;
                currentLength++;
            }

            longestLength = Math.max(longestLength, currentLength);
        }
    }

    return longestLength;
}

// Prompt the user for input
const input = prompt("Enter the array elements separated by spaces: ");
const elements = input.split(" ").map(Number);

// Call the function and output the result
const result = longestConsecutiveSubsequence(elements);
console.log(result);
