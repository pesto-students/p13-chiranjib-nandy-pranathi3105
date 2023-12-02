function isPalindrome(num)
{
    var palindrome = num.toString().split('').reverse().join('');
    return (palindrome==num)? "YES":"NO";
}

console.log(isPalindrome(12321))
