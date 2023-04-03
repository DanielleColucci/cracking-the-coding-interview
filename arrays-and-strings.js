// 1. implement an algorithm to determine if a string has all unique characters

// brute force solution: create dictionary with counts for each char, then iterate through dict -- O(n + n) --> O(n)
const uniqueChars = (str) => {
  const chars = str.split('').reduce((acc, c) => {
    if (acc[c]) acc[c]++
    else acc[c] = 1
    return acc
  }, {})
  for (let c in chars) {
    if (chars[c] > 1) return false
  }
  return true
}

// track if a letter of the alphabet has already been counted with a (26) sized array -- still O(n)
const uniqueChars2 = (str) => {
  const tracker = new Array(128)
  for (let i = 0; i < str.length; i++) {
    if (tracker[str.charCodeAt(i)]) return false
    else tracker[str.charCodeAt(i)] = true
  }
  return true
}

// 2. given two strings, write a method to decide if one is a permutation of the other 

const checkPermutation = (s1, s2) => {
  if (s1.length !== s2.length) return false
  s1 = s1.split('').sort().join('')
  s2 = s2.split('').sort().join('')
  if (s1 === s2) return true
  else return false
}

// 3. write a method to replace all spaces in a string with '%20.' You may assume that the string has sufficient space at the end to hold the additional characters, and that you are given the "true" length of the string 
    // EXAMPLE: 
      // input: 'Mr John Smith    '
      // output: 'Mr%20John%20Smith'

// O(n)
const urlify = (str) => {
  for (let i = 0; i < str.length; i++) {
    if (str[i] === ' ') str = str.slice(0, i) + '%20' + str.slice(i + 1, str.length - 2)
  }
  return str
}

// 4. given a string, write a function to check if it is a permutation of a palindrome. A palindrome is a word or phrase that is the same forwards and backwards. A permutation is a rearrangement of letters. The palindrome does not need to be limited to just dictionary words. You can ignore casing and non-letter characters
    // EXAMPLE: 
      // input: Tact Coa
      // ouput: True (permutations: 'taco cat', 'atco cta', etc)

const palindromePerm = (str) => {
  // count each occurrence of each letter
  const tracker = str.toLowerCase().split('').reduce((acc, c) => {
    if (acc[c]) acc[c]++
    else acc[c] = 1
    return acc
  }, {})

  // iterate through the char tracker and count how many chars have an odd number of occurrences
  let oddCount = 0
  for (let char in tracker) {
    if (char >= 'a' && char <= 'z' && tracker[char] % 2) oddCount++
  }

  // if oddCount is greater than 1, then the string cannot be a palindrome 
  if (oddCount > 1) return false
  else return true
}

console.log(palindromePerm('tact Coa'))
// 5. There are three types of edits that can be performed on strings: insert a character, remove a character, or replace a character. Given a string, write a function to check if they are one edit (or zero edits) away 
    // EXAMPLE: 
      // pale, ple --> True
      // pales, pale --> True
      // pale, bale --> True, 
      // pale, bake --> False 

// 6. Implement a method to perform basic string compression using the counts of repeated characters. For example, the string 'aabcccccaaa' would become 'a2b1c5a3'. If the compressed string would not become smaller than the original string, your method should return the original string. You can assume the string has only uppercase and lowercase letters.

// 7. Given an image by an N x N matrix, where each pixel in  the image is represented by an integer, write a method to rotate the image by 90 degrees. Can you do this in place? 

// 8. Write an algorithm such that if an element in an M x N matrix is 0, its entire row and column are set to 0 

// 9. Assume you have a method isSubstring which checks if one word is a substring of another. Given two strings, s1 and s2, write code to check if s2 is a rotation of s1 using only one call to isSubstring (e.g., 'waterbottle' is a rotation of 'erbottlewat')