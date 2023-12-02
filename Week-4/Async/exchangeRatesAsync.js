async function getExchangeRate(currencyCode) {
    try{
    const response = await fetch("https://api.exchangerate.host/latest");
    
         let data = await response.json();
         if (!data.rates[currencyCode]) {
            return null;
          }
        
          // Return the exchange rate for the specified currencyCode
          return data.rates[currencyCode];
      
      
     
    }
    catch(error){
        return null;
    }
}

getExchangeRate('xyz')

.then((rate) => {
    debugger;
    if(rate!=null)
console.log(Math.round(rate * 10000)/ 10000);  
else console.log(null);})

.catch((error) => {

console.error(error); 

});