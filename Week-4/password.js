function isStrongPassword(pwd)
{
    if(pwd.length <8)
    {
        return false;
    }
    else if(pwd.toLowerCase()=="password")
    {
        return false;
    }
    else if(/^[A-Z]/.test( pwd) == false)
    {
        return false;
    }
    else
    {
        return true;
    }
}
console.log(isStrongPassword("Qwerty123"));
console.log(isStrongPassword("Qwerty"));
console.log(isStrongPassword("qwerty123"));