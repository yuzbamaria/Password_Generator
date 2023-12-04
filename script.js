// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// declare variables globally for password object itself and each property&value
// objects key value pairs
let passwordLength;
let includeSpecialCharacters;
let includeNumbers;
let includeUpperCasedCharacters;
let includeLowerCasedCharacters;
// return object
let userPasswordOptions;
// Function to prompt user for password options


function getPasswordOptions() {
// Present a series of prompts for password criteria
// Prompt user to choose the desired password length – at least 8 characters but no more than 128.
passwordLength = prompt("Hi there🙂! You can generate a password with my help. Please write your desired password length. It can be between 8 and 128 characters.");

// Validate user input for length 
//If statement: if the length is less or more the required one, alert user about the required length 
if (passwordLength < 8 || passwordLength > 128) {
  alert("Sorry, your password should be between 8 and 128 characters long. Try again.");
  passwordLength = prompt("Please enter a valid password length between 8 and 128 characters.");
  // return;
};

// Use confirm 4 times so that user can confirm whether they want to include 4 types of characters
  includeSpecialCharacters = confirm("Would you like to include special characters in your password? For example, @, %, +, /, ', !, etc.");
  includeNumbers = confirm("Would you like to include include numbers in your password? For example, 0, 1, 2, 3, 4, etc.");
   = confirm("Would you like to include lowercased characters? For example. a, b, c, d, etc.");
   = confirm("Would you like to include uppercased characters? For example, A, B, C, D, etc.");

// If statement: if user hasn't chosen any characters type, use alert to guide user to choose any type
if (!(includeSpecialCharacters || includeNumbers || includeUpperCasedCharacters || includeLowerCasedCharacters)) {
  alert("Please choose one option at least.");
  includeSpecialCharacters = confirm("Would you like to include special characters in your password? For example, @, %, +, /, ', !, etc.");
  includeNumbers = confirm("Would you like to include include numbers in your password? For example, 0, 1, 2, 3, 4, etc.");
  includeLowerCasedCharacters = confirm("Would you like to include lowercased characters? For example. a, b, c, d, etc.");
  includeUpperCasedCharacters = confirm("Would you like to include uppercased characters? For example, A, B, C, D, etc.");
}
// Function `getPasswordOptions` returns an object (return statement) with user choices: length & 4 character types 
  return {
    length: passwordLength,
    includeSpecialCharacters: includeSpecialCharacters,
    includeNumbers: includeNumbers,
    includeUpperCasedCharacters: includeUpperCasedCharacters,
    includeLowerCasedCharacters: includeLowerCasedCharacters,
  };
}
// userPasswordOptions = getPasswordOptions();
// console.log(userPasswordOptions);
 

// Function for getting a random element from an array
function getRandom(arr) {
// Use math.floor (rounds down) and math.random (generates random number) to get a random index of each 4 arrays
  let randomArrIndex = Math.floor(Math.random() * arr.length);
  let randomArrElement = arr[randomArrIndex]; 
  // Return an element at a randomly generated index
  return randomArrElement;
}

// Generate random element from 4 arrays (initialise variables)
// Add these random elements to generatePassword function
let randomSpecialCharacters = getRandom(specialCharacters);
// console.log(randomSpecialCharacters);
  
let randomNumbers = getRandom(numericCharacters);
// console.log(randomNumbers);
  
let randomUpperCasedCharacters = getRandom(upperCasedCharacters);
// console.log(randomUpperCasedCharacters); 
  
let randomLowerCasedCharacters = getRandom(lowerCasedCharacters);
// console.log(randomLowerCasedCharacters);

// Function to generate password with user input
function generatePassword() {
  userPasswordOptions = getPasswordOptions();

  let finalPassword = '';

  if (userPasswordOptions.includeSpecialCharacters) {
    finalPassword += specialCharacters.join('');
  }

  if (userPasswordOptions.includeNumbers) {
    finalPassword += numericCharacters.join('');
  }

  if (userPasswordOptions.includeUpperCasedCharacters) {
    finalPassword += upperCasedCharacters.join('');
  }
  
  if (userPasswordOptions.includeLowerCasedCharacters) {
    finalPassword += lowerCasedCharacters.join('');
  }
  

// Update the length of the password according to user choice
// ....initialise an empty string variable to store user desired password length
// ....loop through userPasswordOptions 
let generatedPassword = '';
  for (let i = 0; i < userPasswordOptions.length; i++) {
    let randomIndex = Math.floor(Math.random() * finalPassword.length);
    generatedPassword += finalPassword[randomIndex];
  }
  // console.log(generatedPassword);
  return generatedPassword;
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);