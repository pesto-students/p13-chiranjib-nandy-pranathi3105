function findLongestSubarray(arr) {
    const map = new Map();
    let maxLen = 0;
    let count = 0;

    map.set(0, -1);

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            count--;
        } else {
            count++;
        }

        if (map.has(count)) {
            maxLen = Math.max(maxLen, i - map.get(count));
        } else {
            map.set(count, i);
        }
    }

    return maxLen;
}

// Prompt the user for input
const input = prompt("Enter the array elements separated by spaces: ");
const elements = input.split(" ").map(Number);

// Call the function and output the result
const result = findMaxLength(elements);
console.log(result);
