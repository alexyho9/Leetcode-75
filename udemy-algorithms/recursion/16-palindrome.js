// isPalindrome('awesome') // false
// isPalindrome('foobar') // false
// isPalindrome('tacocat') // true
// isPalindrome('amanaplanacanalpanama') // true
// isPalindrome('amanaplanacanalpandemonium') // false

function isPalindrome(str){
    if (str.length === 1) return true;
    if (str[0] !== str.charAt(str.length-1)) return false;
    return isPalindrome(str.substring(1, str.length - 1));
}

