function reverseNumber(num){
    return num.toString().split('').reverse().join('');
}

console.log(reverseNumber('12345'))