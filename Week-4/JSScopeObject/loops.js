function drawTriangle(size)
{
    let line = "";
    for(let i = 0; i<= size; i++)
    {

        for(let j=0; j<i;j++)
        {
           line += "*";
        }
        line += "\n";
    }
    return line +"\n";
}
console.log(drawTriangle(4));