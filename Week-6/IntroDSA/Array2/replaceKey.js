function replaceKey(arr, oldKey, newKey) {
    // PLACEHOLDER_JAVASCRIPT_REPLACE_KEY_BODY

    //return arr.find(oldKey).replace(newKey);

   

for (let i = 0; i < arr.length; i++) {
  if (arr[i] === oldKey) {
    arr[i] = newKey;
  } 
}
return arr;
  }
console.log(replaceKey([1,2,3,2,4,2,5],2,6));  