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

function generatePassword() {

var upper = ("ABCDEFGHIJKLMNOPQRSTUVWXYZ")
var lower = ("abcdefghijklmnopqrstuvwxyz")
var number = ("1234567890")
var symbol = ("!@#$%^&*")
var index = 0
var allOptions = "";
var finalPassword = "";


var length = window.prompt('Choose a length for your password! (Must be between 8 & 128 characters)')

while(length <= 7 || length >= 128) {
      alert("Your password must be between 8 & 128 characters! Try again!");
      var length = window.prompt('Choose a length for your password! (Must be between 8 & 128 characters)')
      }
var confirmUpper = window.confirm('Would you like to include uppercase letters?')
var confirmLower = window.confirm('Would you like to include lowercase letters?')
var confirmNumber = window.confirm('Would you like to include numbers?')
var confirmSymbol = window.confirm('Would you like to include symbols?')

if (confirmUpper == true) {
  allOptions = allOptions + upper;
}

if (confirmLower == true) {
  allOptions = allOptions + lower;
}

if (confirmNumber == true) {
  allOptions = allOptions + number;
}

if (confirmSymbol == true) {
  allOptions = allOptions + symbol;
}

for (let i = 0; i < length; i++) {
  index = Math.floor(Math.random() * allOptions.length)
  finalPassword = finalPassword + allOptions[index]
}

console.log(allOptions)

return finalPassword;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

