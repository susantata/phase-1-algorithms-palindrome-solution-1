function isPalindrome(word) {
  // Write your algorithm here
  let reversedWord = word.split("").reverse().join("");

  if (word === reversedWord){
    return true;
    
  } else {
    return false;
  }
}

/* 
  Add your pseudocode here
*/


//  1.first reverse the string
//  2.check whether the reversed string is equal to the     original word
//  3.if true, then the word is a palidrome

/*
  Add written explanation of your solution here
*/

// 1.a palidrome word is read similarly to its reverse
// 2.so we compare the word with its reverse to see whether they are simmilar.


// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
