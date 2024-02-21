// Problem
// Given a string,
// find and return the character that appears most frequently in the string.

// Examples:
// getMaxCharacters("abcccccccd") === "c"
// getMaxCharacters("apple 1231111") === "1"

// ดึงตัวอักษรที่มีจำนวนมากที่สุด
export const getMaxCharacters = (str) => {
  // reduce คำนวณจำนวนของแต่ละตัวอักษร   และหาตัวอักษรที่มีจำนวนมากที่สุด
  const maxChar = str.split("").reduce((charCounts, char) => {
    charCounts[char] = (charCounts[char] || 0) + 1;
    return charCounts;
  }, {});

  // หาตัวอักษรที่มีจำนวนมากที่สุด
  return Object.keys(maxChar).reduce((a, b) =>
    maxChar[a] > maxChar[b] ? a : b
  );
};

console.log(getMaxCharacters("abcccccccd"));
console.log(getMaxCharacters("apple 1231111"));
console.log(getMaxCharacters("sawatdekubbbbbbbb"));
