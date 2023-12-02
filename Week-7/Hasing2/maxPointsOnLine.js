function maxPointsOnLine(points) {
    if (points.length <= 2) {
      return points.length;
    }
  
    let maxPoints = 0;
  
    for (let i = 0; i < points.length; i++) {
      const slopes = new Map();
      let duplicates = 1; // Count points with the same coordinates
  
      for (let j = 0; j < points.length; j++) {
        if (i !== j) {
          let dx = points[j][0] - points[i][0];
          let dy = points[j][1] - points[i][1];
  
          if (dx === 0 && dy === 0) {
            duplicates++;
            continue;
          }
  
          let slope = dx === 0 ? Infinity : dy === 0 ? 0 : dy / dx;
  
          // Convert slope to string to handle floating-point precision issues
          slope = slope.toString();
  
          if (!slopes.has(slope)) {
            slopes.set(slope, 1);
          } else {
            slopes.set(slope, slopes.get(slope) + 1);
          }
        }
      }
  
      // Update maxPoints with the maximum number of points on the same line
      maxPoints = Math.max(maxPoints, duplicates);
  
      for (let value of slopes.values()) {
        maxPoints = Math.max(maxPoints, value + duplicates);
      }
    }
  
    return maxPoints;
  }
  
  // Example input
  const points = [
    [1, 1],
    [2, 2],
    [3, 3],
    [4, 5],
    [5, 6],
    [6, 7]
  ];
  
  // Find the maximum number of points on the same line
  const maxPoints = maxPointsOnLine(points);
  
  // Display the output
  console.log(maxPoints);
  