// Assignment code here
console.log(length);

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

//the values
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var symbol = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];
var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];


function generatePassword(length, upper, lower, number, symbol) {
  // choosing the length of the password
  var length = window.prompt('Choose a length for your password! (Must be between 8 & 128 characters)')

  while(length <= 7 || length >= 128) {
      alert("Your password must be between 8 & 128 characters! Try again!");
      var length = window.prompt('Choose a length for your password! (Must be between 8 & 128 characters)')
      } 
  var upper = window.confirm('Would you like to include uppercase letters?')
  var lower = window.confirm('Would you like to include lowercase letters?')
  var number = window.confirm('Would you like to include numbers?')
  var symbol = window.confirm('Would you like to include symbols?')
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

