// Problem
// Given a string,
// find and return the character that appears most frequently in the string.

// Examples:
// getMaxCharacters("abcccccccd") === "c"
// getMaxCharacters("apple 1231111") === "1"

export const getMaxCharacters = (str) => {
  return Object.entries(
    str.split("").reduce((charCounts, char) => {
      charCounts[char] = (charCounts[char] || 0) + 1;
      return charCounts;
    }, {})
  ).reduce((a, b) => (a[1] > b[1] ? a : b))[0];
};

console.log(getMaxCharacters("abcccccccd"));
console.log(getMaxCharacters("apple 1231111"));
console.log(getMaxCharacters("sawatdekubbbbbbbb"));
