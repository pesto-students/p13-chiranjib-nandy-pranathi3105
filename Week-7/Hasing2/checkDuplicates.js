function checkDuplicates(arr) {
    const hashMap = {};
  
    for (let i = 0; i < arr.length; i++) {
      // If the element already exists in the hash map, return true (duplicate found)
      if (hashMap[arr[i]]) {
        return true;
      } else {
        // Mark the element as seen in the hash map
        hashMap[arr[i]] = true;
      }
    }
  
    // If no duplicates were found during the iteration, return false
    return false;
  }
  
  // Taking input from the user
  const input = prompt("Enter a series of integers separated by spaces:").trim();
  const integers = input.split(" ").map(Number);
  
  // Check for duplicates in the array of integers
  const hasDuplicates = checkDuplicates(integers);
  
  // Display the output based on the presence of duplicates
  if (hasDuplicates) {
    console.log("There are duplicate elements in the array.");
  } else {
    console.log("There are no duplicate elements in the array.");
  }
  