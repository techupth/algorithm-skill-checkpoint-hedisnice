// Problem
// Given a string, determine if it is a palindrome,
// meaning it reads the same forwards and backwards,
// including spaces and punctuation.
// Return true if it is, false if it is not.

// Examples:
// palindrome("abba") === true
// palindrome("abcdefg") === false

const isPalindrome = (str) => {
  const cleanStr = str.replace(/[^A-Za-z0-9]/g);
  return cleanStr === cleanStr.split("").reverse().join("");
};

// true Palindrome
console.log(isPalindrome("abba"));
console.log(isPalindrome("radar"));
console.log(isPalindrome("noon"));
console.log(isPalindrome("level"));
console.log(isPalindrome("2112"));
console.log(isPalindrome("aba"));
console.log(isPalindrome("aba"));
console.log(isPalindrome("Fish hsif"));
// false Palindrome
console.log(isPalindrome("abcdefg"));
console.log(isPalindrome("banana"));
console.log(isPalindrome("apple"));
console.log(isPalindrome("computer"));
