// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword(length, upper, lower, number, symbol) {
  // choosing the length of the password
  var length = window.prompt('Choose a length for your password! (Must be between 8 & 128 characters)')
  var upper = window.prompt('Would you like to include uppercase letters? Type "YES" or "NO"')
  var lower = window.prompt('Would you like to include lowercase letters? Type "YES" or "NO"')
  var number = window.prompt('Would you like to include numbers? Type "YES" or "NO"')
  var symbol = window.prompt('Would you like to include symbols? Type "YES" or "NO"')
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

