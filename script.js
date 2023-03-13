// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// get the user length of the password
function getLength(){
    var passlength = prompt("How long do you want the password to be", 8);
    while (passlength < 8 || passlength > 128) {
        alert("invalid password length. must be between 8 and 128");
        passlength = prompt("How long do you want the password to be", 8);
    }
    return passlength;
}

// asks user if lower case letters should be included in the password
function getLowerLetters(){
    var lowerLetters = prompt("Include lower case letters? (Y/N)", "yes");
    lowerLetters = lowerLetters.toLowerCase();
    while (lowerLetters !== "y" && lowerLetters !== "yes" && lowerLetters !== "no" && lowerLetters !== "n"){
        alert("Please say yes/no/y/n");
        lowerLetters = prompt("Include lower case letters? (Y/N)", "yes");
        lowerLetters = lowerLetters.toLowerCase();
    }

    if (lowerLetters === "y" || lowerLetters === "yes"){
        return true;
    } else {
        return false;
    }
}

// asks user if upper case letters should be included in the password
function getUpperLetters(){
    var upperLetters = prompt("Include upper case letters? (Y/N)", "yes");
    upperLetters.toLowerCase();

    while (upperLetters !== "y" && upperLetters !== "yes" && upperLetters !== "no" && upperLetters !== "n"){
        alert("Please say yes/no/y/n");
        upperLetters = prompt("Include upper case letters? (Y/N)", "yes");
        upperLetters.toLowerCase();
    }

    if (upperLetters === "y" || upperLetters === "yes"){
        return true;
    } else {
        return false;
    }
}

// asks user if numbers should be included in the password
function getNumerics(){
    var numerics = prompt("Include numerics? (Y/N)", "yes");
    numerics.toLowerCase();

    while (numerics !== "y" && numerics !== "yes" && numerics !== "no" && numerics !== "n"){
        alert("Please say yes/no/y/n");
        numerics = prompt("Include numerics? (Y/N)", "yes");
        numerics.toLowerCase();
    }

    if (numerics === "y" || numerics === "yes"){
        return true;
    } else {
        return false;
    }

}

// asks user if special characters should be included in the password
function getSpecial(){
    var special = prompt("Include special characters? (Y/N)", "yes");
    special.toLowerCase();

    while (special !== "y" && special !== "yes" && special !== "no" && special !== "n"){
        alert("Please say yes/no/y/n");
        special = prompt("Include special characters? (Y/N)", "yes");
        special.toLowerCase();
    }

    if (special === "y" || special === "yes"){
        return true;
    } else {
        return false;
    }

}

// picks a random number from 0 to the length of the string parameter it then returns the character at that number index
function getRandomCharacter(inputString){
    var rand = Math.floor(Math.random() * inputString.length);
    var randChar = inputString.substring(rand, rand + 1);

    return randChar;
}

// creates the password depending on if user allowed different types of characters. If the user selected yes for any there will be at least one required of that type of character in the password
function generatePassword(){
    var password = "";
    var uppers = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var lowers = "abcdefghijklmnopqrstuvwxyz";
    var numerics = "0123456789";
    var specials = " !\"#$%&\'()*+,-./:;<=>?@[]^_\`{|}~\\"
    var usableCharacters = "";

    var pwlength = getLength();
    var includeLowerLetters = getLowerLetters();
    var includeUpperLetters = getUpperLetters();
    var includeNumerics = getNumerics();
    var includeSpecial = getSpecial();

    if (includeLowerLetters){
        usableCharacters = usableCharacters.concat(lowers);
        var requiredLower = getRandomCharacter(lowers);
        password = password.concat(requiredLower);
    }

    if (includeUpperLetters){
        usableCharacters = usableCharacters.concat(uppers);
        var requiredUpper = getRandomCharacter(uppers);
        password = password.concat(requiredUpper);
    }

    if (includeNumerics){
        usableCharacters = usableCharacters.concat(numerics);
        var requiredNumeric = getRandomCharacter(numerics);
        password = password.concat(requiredNumeric);
    }

    if (includeSpecial){
        usableCharacters = usableCharacters.concat(specials);
        var requiredSpecial = getRandomCharacter(specials);
        password = password.concat(requiredSpecial);
    }
    

    while (password.length != pwlength){
        var char = getRandomCharacter(usableCharacters);
        password = password.concat(char);
    }

    return password;
}

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);