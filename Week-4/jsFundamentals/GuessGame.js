var numToGuess = Math.floor(Math.random() * 100 + 1);
var guess =0;
var totalGuesses =10;
function playGuessingGame(numToGuess,totalGuesses)
{   let value = parseInt(prompt("Enter a number between 1 to 100."));
     debugger
     guess++;
    if (value == null) {
        guess = 0;
    }
    else if(value == "" || isNaN(value))
        alert("Please enter a number");
    else if(guess == numToGuess) {
             guess = 0;
        }
    else if(value < numToGuess)
    {
        alert( value+" is too small. Guess a larger number.");
        playGuessingGame(numToGuess,totalGuesses);
    }
    else if(value > numToGuess)
    {
        alert( value+"  is too large. Guess a smaller number.");
        playGuessingGame(numToGuess,totalGuesses);
        
    }
     return guess;
  
}
console.log(playGuessingGame(numToGuess,totalGuesses));