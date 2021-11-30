function isPalindrome(word) {
  for (let i = 0; i < word.length / 2; i++) {
    const end = word.length - 1 - i;
    if (word[i] !== word[end]) {
      return false;
    }
  }

  return true;
}

/* 
==================================
  This is the second attempt through this code using a more memory efficient code.
==================================

- The isPalindrome function is checking the parameter if the string is a Palindrome.
    -If it is, the function will return TRUE. If not, then it will return FALSE.

(The purpose of this code is to have a more memory efficient code, set by the example on the lab page, than:
  word.split("").reverse().join("") === word)
*/

/*

  The fuction is broken up into 2 parts and checking each other to see if they match.
  On the first loop, the function is taking the first letter, and the last letter to check
  if they match. If they do, the loop continues to the next letter (and second to last letter)
  to see if they match. This loop will continue until it reaches the end and return TRUE. However,
  if the loop manages to find 2 letters that do not match, the loop will return FALSE and stop.

*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("banana"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("pop"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("cow"));
}

module.exports = isPalindrome;
