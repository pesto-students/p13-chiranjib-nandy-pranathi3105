function shellSortDates(arr) {
    // Convert input string to an array of dates
    arr = arr.split(',').map(date => new Date(date.trim()));
  
    // Convert dates to timestamps for sorting
    const timestamps = arr.map(date => date.getTime());
  
    const n = timestamps.length;
    let gap = Math.floor(n / 2);
  
    while (gap > 0) {
      for (let i = gap; i < n; i++) {
        const temp = timestamps[i];
        let j = i;
  
        while (j >= gap && timestamps[j - gap] > temp) {
          timestamps[j] = timestamps[j - gap];
          j -= gap;
        }
  
        timestamps[j] = temp;
      }
  
      gap = Math.floor(gap / 2);
    }
  
    // Convert sorted timestamps back to dates
    const sortedDates = timestamps.map(timestamp => new Date(timestamp));
  
    // Format dates to "YYYY-MM-DD HH:mm:ss" string format
    const formattedDates = sortedDates.map(date => {
      const year = date.getFullYear();
      const month = (date.getMonth() + 1).toString().padStart(2, '0');
      const day = date.getDate().toString().padStart(2, '0');
      const hours = date.getHours().toString().padStart(2, '0');
      const minutes = date.getMinutes().toString().padStart(2, '0');
      const seconds = date.getSeconds().toString().padStart(2, '0');
  
      return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
    });
  
    return formattedDates;
  }
  
  // Get user input as a comma-separated string of dates
  let input = prompt("Enter dates separated by commas (in 'YYYY-MM-DD HH:mm:ss' format):");
  
  // Sort the array using Shell Sort for dates
  let sortedDates = shellSortDates(input);
  
  // Display the sorted array as a comma-separated string
  console.log("Sorted Dates:");
  console.log(sortedDates.join(', '));
  