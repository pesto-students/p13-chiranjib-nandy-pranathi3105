function calcWordFrequencies()
{
    let input = prompt("Please enter a string");
    let words = input.split(" ");
    debugger;
    let wordFreq = new Map();
    for(let i=0; i< words.length ; i++)
    {
        if(wordFreq.has(words[i]))
        {
            wordFreq.set(words[i],wordFreq.get(words[i])+1);
        }
        else{
            wordFreq.set(words[i],1); 
        }
    }
    for(let[word,freq] of wordFreq)
    {
        console.log(word+ " " + freq);
    }
}
calcWordFrequencies();