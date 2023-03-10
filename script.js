// Assignment code here

// 1. prompt user for password citeria
//  a. prompt user if they want upper case, lower case, numbers or symbols
//  b.
// 2. validate input
// 3. generate password based on criteria
// 4. display password

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
var symbols = ["!","@","#","$","%","^","&","*","(",")","-","_","=","+","`","~",",",".","/",";","'","<",">","?"]

function generatePassword() {
  var passwordOptions = []
  var length = prompt("how long would you like your password to be?")
  var hasUpperCase = confirm("would you like Upper case letters in your password?")
  var hasLowerCase = confirm("would you like to use lower case letters?")
  var hasNumbers = confirm("would you like to use numbers?")
  var hasSymbols = confirm("would you like to use symbols?")

  if (hasUpperCase === true){
    passwordOptions = passwordOptions.concat(upperCase)
  }

  if (lowerCase === true){
    passwordOptions = passwordOptions.concat(lowerCase)
  }

  if (hasNumbers === true){
    passwordOptions = passwordOptions.concat(numbers)
  }

  if (hasSymbols === true){
    passwordOptions = passwordOptions.concat(symbols)
  }
console.log (passwordOptions)
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
