function deleteDivisibleElements(arr) {
    // PLACEHOLDER_JAVASCRIPT_DELETE_DIVISIBLE_ELEMENTS_BODY

    return arr.filter(val=>(val%2 !==0 && val%3 !==0));
  }

  console.log(deleteDivisibleElements([1,2,3,4,5,6,7,8,9]))