function isPalindrome(word) {
  let reverseWord = word.split('').reverse().join('');
  return reverseWord === word ? true : false;
}

  if (require.main === module) {
    // add your own custom tests in here
    console.log("Expecting: true");
    console.log("=>", isPalindrome("abba"))
  
    console.log("Expecting: false");
    console.log("=>", isPalindrome("adipose"))
  
    console.log("Expecting: true");
    console.log("=>", isPalindrome('mom'));
  
    console.log("Expecting: false");
    console.log("=>", isPalindrome('robbot'))
  
    console.log("Expecting: true");
    console.log("=>", isPalindrome("racecar"));
  }
  module.exports = isPalindrome