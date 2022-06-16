function isPalindrome(word) {
  // Write your algorithm here
  return word == word.split("").reverse().join("") ? true : false;
}
console.log(isPalindrome(mom))

console.log(isPalindrome("mom"))
  
if (require.main === module) {
  // add your own custom tests in here
  
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
