function countingSort(arr) {
    // Convert comma-separated string to array of integers
    arr = arr.split(',').map(Number);
  
    // Find the maximum element in the array
    const max = Math.max(...arr);
  
    // Create a counting array to store the count of each element
    const count = Array(max + 1).fill(0);
  
    // Count the occurrences of each element in the input array
    for (let num of arr) {
      count[num]++;
    }
  
    // Modify the counting array to store the cumulative count
    for (let i = 1; i < count.length; i++) {
      count[i] += count[i - 1];
    }
  
    // Create a sorted array to store the sorted elements
    const sortedArray = Array(arr.length);
  
    // Traverse the input array and place elements at their correct position in the sorted array
    for (let i = arr.length - 1; i >= 0; i--) {
      sortedArray[count[arr[i]] - 1] = arr[i];
      count[arr[i]]--;
    }
  
    return sortedArray;
  }
  
  // Get user input as a comma-separated string of positive integers
  let input = prompt("Enter positive integers separated by commas:");
  
  // Sorting the array using Counting Sort
  let sortedArray = countingSort(input);
  
  // Displaying each integer in the sorted array on a new line
  console.log("Sorted Array:");
  sortedArray.forEach(num => console.log(num));
  