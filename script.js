// Ascii Value Arrays for Letters, Numbers, and Symbols
const UpperCaseCodes = arrayFromLowToHigh(65, 90);

const LowerCaseCodes = arrayFromLowToHigh(97, 122);

const NumberCodes = arrayFromLowToHigh(48, 57);

const SymbolCodes = arrayFromLowToHigh(33, 47).concat(arrayFromLowToHigh(58, 64)).concat(arrayFromLowToHigh(91, 96)).concat(arrayFromLowToHigh(123, 126));

// Click Button to Start Generator 
var generateBtn = document.querySelector("#generate");

// Add click event listener to button
generateBtn.addEventListener("click", writePassword);


// Generate password and output to document functions
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Generate password function
function generatePassword() {
  characterAmount = parseInt(prompt("What length do you want your password to be 8-128 characters?"));
  // Prompt to enter a value if canceled or nothing entered
  if (!characterAmount) {
    alert("Please enter a value!");
} else if (characterAmount < 8 || characterAmount > 128) {
    alert("You must choose between 8 and 128");
    generatePassword()
    return "";
  
    
 
    // Creation Criteria Prompt Questions and Variables
} else {
  var confirmUppercase = confirm("Would you like this to contain Uppercase letters?");
  var confirmLowercase = confirm("Would you like this to contain Lowercase letters?");
  var confirmNumber = confirm("Would you like this to contain Numbers?");
  var confirmCharacter = confirm("Would you like this to contain Symbols?");
  
}

// Warning Popup that Criteria is not valid for password
if (!confirmCharacter && !confirmNumber && !confirmUppercase && !confirmLowercase) {
     alert("Creation Criteria Not Valid!")
     return "";
}
    // New array from confirmation question selections
    let charCodes = []
   if (confirmUppercase) charCodes = charCodes.concat(UpperCaseCodes)
   if (confirmLowercase) charCodes = charCodes.concat(LowerCaseCodes)
   if (confirmNumber) charCodes = charCodes.concat(NumberCodes)
   if (confirmCharacter) charCodes = charCodes.concat(SymbolCodes)

  // Generates new Array to be pushed to defined display string #password
   const passwordCharacters = []
  // Loop after each character in characterAmount
    for (let i = 0; i < characterAmount; i++) {
  // Grabs random value from generated arrays of characters and pushes it into a string
   const characterCode = charCodes [Math.floor(Math.random() * charCodes.length)]
    passwordCharacters.push(String.fromCharCode(characterCode))
  }
  // Outputs string to define value in passwordText of #password
  return passwordCharacters.join('')

}
  // Generate character arrays using Ascii values
  function arrayFromLowToHigh(low, high){
  const array = []
  for (var i = low; i <= high; i++) {
      array.push(i)
  }
  return array
}

  