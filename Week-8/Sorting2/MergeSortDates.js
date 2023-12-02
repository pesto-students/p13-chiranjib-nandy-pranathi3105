function mergeSortDates(arr) {
    // Convert input string to an array of dates
    arr = arr.split(',');
  
    // Merge helper function to merge two sorted arrays
    function merge(left, right) {
      let result = [];
      let leftIndex = 0;
      let rightIndex = 0;
  
      // Compare elements and merge into result array
      while (leftIndex < left.length && rightIndex < right.length) {
        if (new Date(left[leftIndex]) < new Date(right[rightIndex])) {
          result.push(left[leftIndex]);
          leftIndex++;
        } else {
          result.push(right[rightIndex]);
          rightIndex++;
        }
      }
  
      // Concatenate remaining elements from left and right arrays
      return result.concat(left.slice(leftIndex), right.slice(rightIndex));
    }
  
    // Merge Sort function
    function mergeSort(arr) {
      const len = arr.length;
      if (len <= 1) {
        return arr;
      }
  
      const mid = Math.floor(len / 2);
      const left = arr.slice(0, mid);
      const right = arr.slice(mid);
  
      return merge(mergeSort(left), mergeSort(right));
    }
  
    // Perform Merge Sort on the array of dates
    const sortedDates = mergeSort(arr);
  
    return sortedDates;
  }
  
  // Get user input as a comma-separated string of dates
  let input = prompt("Enter dates separated by commas (in 'YYYY-MM-DD' format):");
  
  // Sort the array using Merge Sort for dates
  let sortedDates = mergeSortDates(input);
  
  // Display each date in the sorted array on a new line
  console.log("Sorted Dates:");
  sortedDates.forEach(date => console.log(date));
  