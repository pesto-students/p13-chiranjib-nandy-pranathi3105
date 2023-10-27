function findIntersection(arr1, arr2) {
    const intersection = [];

    // Iterate through the first array
    for (const element of arr1) {
      if (arr2.includes(element)) {
        intersection.push(element);
      }
    }
  
    return intersection;

}


console.log(findIntersection([1,2,3,4,5],[4,5,6,7,8]))