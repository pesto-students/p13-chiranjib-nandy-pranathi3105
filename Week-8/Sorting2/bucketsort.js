function bucketSort(arr) {
    // Convert input string to an array of numbers
    arr = arr.split(' ').map(Number);
  
    // Separate even and odd numbers into separate buckets
    const evenBucket = [];
    const oddBucket = [];
  
    for (let num of arr) {
      if (num % 2 === 0) {
        evenBucket.push(num);
      } else {
        oddBucket.push(num);
      }
    }
  
    // Sort the numbers in each bucket (using any sorting algorithm)
    evenBucket.sort((a, b) => a - b);
    oddBucket.sort((a, b) => a - b);
  
    // Concatenate the sorted even and odd buckets to get the final sorted array
    const sortedArray = [...evenBucket, ...oddBucket];
  
    return sortedArray;
  }
  
  // Get user input as a string of numbers separated by spaces
  let input = prompt("Enter numbers separated by spaces:");
  
  // Sort the array using Bucket Sort for even and odd numbers
  let sortedArray = bucketSort(input);
  
  // Display the sorted array separated by spaces
  console.log("Sorted Array:");
  console.log(sortedArray.join(' '));
  