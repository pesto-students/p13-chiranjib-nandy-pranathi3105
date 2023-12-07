function race(groups) {
    if (groups.length === 1) {
      // If only one group remaining, find the horse with max strength in that group
      let maxStrength = Number.MIN_SAFE_INTEGER;
      let maxIndex = -1;
  
      for (let i = 0; i < groups[0].length; i++) {
        if (groups[0][i] > maxStrength) {
          maxStrength = groups[0][i];
          maxIndex = i;
        }
      }
  
      return maxIndex;
    }
  
    // Divide the list of groups into two subgroups
    const mid = Math.floor(groups.length / 2);
    const firstHalf = groups.slice(0, mid);
    const secondHalf = groups.slice(mid);
  
    // Recursively call the race function on each subgroup
    const winner1 = race(firstHalf);
    const winner2 = race(secondHalf);
  
    // Determine the winners of the races between the subgroups
    if (groups[winner1] > groups[winner2]) {
      return winner1;
    } else {
      return winner2;
    }
  }
  
  function findMaxStrengthHorse(N, K, strengths) {
    const horses = strengths.split(" ").map(Number);
    const groups = [horses]; // Initial group contains all horses
  
    while (K > 1) {
      const newGroups = [];
      for (let i = 0; i < groups.length; i += 2) {
        const firstGroup = groups[i];
        const secondGroup = groups[i + 1] || [];
        newGroups.push(firstGroup.concat(secondGroup));
      }
      groups.splice(0, groups.length, ...newGroups); // Replace groups with newGroups
      K--;
    }
  
    // Find the index of the horse with the maximum strength value using race function
    const maxStrengthIndex = race(groups);
    return maxStrengthIndex;
  }
  
  // Example usage:
  const input1 = "5 2";
  const strengths1 = "4 2 7 5 1";
  const [N1, K1] = input1.split(" ").map(Number);
  const result1 = findMaxStrengthHorse(N1, K1, strengths1);
  console.log("Sample Output 1:", result1);
  
  const input2 = "6 3";
  const strengths2 = "9 4 8 2 6 5";
  const [N2, K2] = input2.split(" ").map(Number);
  const result2 = findMaxStrengthHorse(N2, K2, strengths2);
  console.log("Sample Output 2:", result2);
  