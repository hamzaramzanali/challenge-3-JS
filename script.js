// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  // WHEN the password is generated
  // THEN the password is either displayed in an alert or written to the page
  passwordText.value = password;

}

// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  // this was done with the help of the great ta paul
  var availableCharacters = '';
  var completedPassword = '';
  // THEN I am presented with a series of prompts for password criteria
  // WHEN prompted for password criteria
  // THEN I select which criteria to include in the password
  // WHEN asked for character types to include in the password
  // THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
  // series of prompts:
  // ask if they want uppercase?
  var wantUpper = confirm(`Do you want to include uppercase characters in your password?`)
  // ask if they want lowercase?
  var wantLower = confirm(`Do you want to include lowercase characters in your password?`)
  // ask if they want special characters?
  var wantSpecialCharacters = confirm (`Do you want to include Special Characters in your password?`)
  // ask if they want numerics?
  var wantNumerics = confirm (`Do you want to include numerics in your password`)
  console.log(wantUpper);

  // WHEN prompted for the length of the password
  // THEN I choose a length of at least 8 characters and no more than 128 characters
  // ask what the length of password should be
  var desiredPasswordLength = prompt(`How long do you want the password? Must be 8-128 characters`);
  if ((parseInt(desiredPasswordLength) >= 8) && (parseInt(desiredPasswordLength) <= 128)) {
    // answer needs to be between 8 and 128

    console.log(desiredPasswordLength);
    console.log(availableCharacters)
// checks to see if uppercase was desired and adds the characters to the bank of available
    if (wantUpper) {
      availableCharacters = availableCharacters + 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    }
    console.log(availableCharacters)
    // checks to see if lowercase was desired and adds the characters to the bank of available
    if (wantLower) {
      availableCharacters = availableCharacters + 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.toLowerCase();
    }

    if (wantSpecialCharacters) {
      availableCharacters = availableCharacters + `!#%&()*+,-./:;<=>?@[\]^_~`
    }

    if (wantNumerics) {
      availableCharacters = availableCharacters + `1234567890`
    }

    console.log(availableCharacters)

    for(var i = 0; i < parseInt(desiredPasswordLength); i++) {
      // get a random index based on the length of our character bank and use that to select one character from that bank and then concatenate it onto the password
      var randomIndex = Math.floor(Math.random()*availableCharacters.length);
      console.log(randomIndex);
      var randomCharacter = availableCharacters[randomIndex];
      console.log(randomCharacter);
      completedPassword = completedPassword + randomCharacter;
      console.log(completedPassword);
    }
    // WHEN I answer each prompt
    // THEN my input should be validated and at least one character type should be selected
    // all prompts answered--verify that at least one character type is chosen
    // WHEN all prompts are answered
    // THEN a password is generated that matches the selected criteria
    // return completed password
    return completedPassword;

  } else {
    // they entered an incorrect size
    alert(`the length needs to be a number between 8 and 128`);
    return '';
    // generatePassword();
    // return null;
  }
}
