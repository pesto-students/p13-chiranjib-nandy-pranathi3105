
function divideArray(numbers)
{
    var odd = [];
    var even = [];
    for(let i=0;i<numbers.length;i++)
    {
        if(numbers[i]%2===1)
        {
            odd.push(numbers[i]);
        }
        else 
        {
            even.push(numbers[i]);
        }
        

    }
   odd.sort();
   even.sort();
   console.log("Even Numbers: ");
   if(even.length > 0){
        for(let i=0;i<even.length;i++ )
        {
        console.log(even[i])
        }
     }
     else
     {
        console.log("None");
     }
     console.log("Odd Numbers: ");
     
   if(odd.length > 0){
    for(let i=0;i<odd.length;i++ )
    {
        console.log(odd[i])
    }
    }
    else
    {
    console.log("None");
    }


}
divideArray([4,2,8]);
