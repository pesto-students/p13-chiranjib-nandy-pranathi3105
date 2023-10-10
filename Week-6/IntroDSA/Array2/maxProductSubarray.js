function maxProductSubarray(elements) {
    if (elements.length === 0) return 0;
  
    let maxProduct = elements[0];
    let minProduct = elements[0];
    let result = elements[0];
  
    for (let i = 1; i < elements.length; i++) {
      if (elements[i] < 0) {
        let temp = maxProduct;
        maxProduct = minProduct;
        minProduct = temp;
      }
  
      maxProduct = Math.max(elements[i], maxProduct * elements[i]);
      minProduct = Math.min(elements[i], minProduct * elements[i]);
  
      result = Math.max(result, maxProduct);
    }
  
    return result;
  }
console.log(maxProductSubarray([2,3,-2,4,5]));