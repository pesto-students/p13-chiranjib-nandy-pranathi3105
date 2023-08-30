
function counter(){
    let count = 1;
    return function()
    {
        return count++;
    }
}
var firstCounter = counter();
var secondCounter = counter();

var firstValues = [];
var secondValues=[];
for(i=0 ; i<5 ; ++i)
{
    firstValues.push(firstCounter());
}
for(i=0 ; i<3 ; ++i)
{
    secondValues.push(secondCounter());
}
console.log("firstValues array: " + firstValues);
console.log('second values: ' + secondValues );