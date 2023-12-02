function findNonDuplicateElement(arr) {
    // PLACEHOLDER_JAVASCRIPT_FIND_NON_DUPLICATE_ELEMENT_BODY
  
    let a = 0
    arr.forEach((i)=>{
        a^=i;
    })

    return a

}

  console.log(findNonDuplicateElement([5,2,3,2,5,1,3]))