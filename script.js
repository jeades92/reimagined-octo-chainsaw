// Assignment code here

// 1. prompt user for password citeria
//  a. prompt user if they want upper case, lower case, numbers or symbols
//  b.
// 2. validate input
// 3. generate password based on criteria
// 4. display password

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var length = prompt("how long would you like your password to be?")
  var hasUpperCase = confirm("would you like Upper case letters in your password?")
  var hasLowerCase = confirm("would you like to use lower case letters?")
  var hasNumbers = confirm("would you like to use numbers?")
  var hasSymbols = confirm("would you like to use symbols?")

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
