function groupAnagrams(strings) {
    const map = new Map();
    
    // Iterate through each string in the input array
    for (let str of strings) {
      // Sort the characters of the string and use it as a key in the map
      const sortedStr = str.split('').sort().join('');
      
      // If the sorted string is already in the map, add the original string to its group
      if (map.has(sortedStr)) {
        map.get(sortedStr).push(str);
      } else {
        // Otherwise, create a new group with the sorted string as key
        map.set(sortedStr, [str]);
      }
    }
    
    // Return the values (anagram groups) from the map as a 2D array
    return Array.from(map.values()).map(group => group.sort());
  }
  
  // Example usage
  const N = 4;
  const strings = ["abc", "bca",  "xyz","cab"];
  
  const groupedAnagrams = groupAnagrams(strings);
  console.log(groupedAnagrams);
  