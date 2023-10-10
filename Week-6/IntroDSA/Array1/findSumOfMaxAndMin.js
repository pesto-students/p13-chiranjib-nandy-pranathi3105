function findSumOfMaxAndMin(array)
{
    if (!array.length) {
        return null;
      }
    
      // Initialize the min and max values
      let min = array[0];
      let max = array[0];
    
      // Iterate over the array and update the min and max values
      for (const element of array) {
        min = Math.min(min, element);
        max = Math.max(max, element);
      }
    
      // Return the sum of the min and max values
      return min + max;
}
console.log(findSumOfMaxAndMin([5,2,9,1,7]));