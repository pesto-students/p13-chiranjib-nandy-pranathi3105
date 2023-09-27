async function getExchangeRate(currencyCode) {
    try{
    const response = await fetch(`https://api.exchangerate.host/latest?base=${currencyCode}`);
    debugger;
    if (response.ok) {
         const Data = await response.json();
        return Data.rates;
        ;
      }
      
     
    }
    catch(error){
        return null;
    }
}

getExchangeRate('XYZ')

.then((rate) => {
debugger;
console.log(rate);  })

.catch((error) => {

console.error(error);

});