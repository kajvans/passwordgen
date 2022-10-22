const letters = "abcdefghijklmnopqrstuvwxyz";
const capitalletters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const specialcharacters = "!@#$%^&*()_+~`|}{[]\:;?><,./-=";

const allchar = letters + capitalletters + numbers + specialcharacters;

function GenerateWithControl({lettercount, capitalcount, numbercount, specialcount}){

    var chars = "";
    var password = "";

    for(var i = 0; i < lettercount; i++){
        chars += letters[Math.floor(Math.random() * letters.length)];
    }

    for(var i = 0; i < capitalcount; i++){
        chars += capitalletters[Math.floor(Math.random() * capitalletters.length)];
    }

    for(var i = 0; i < numbercount; i++){
        chars += numbers[Math.floor(Math.random() * numbers.length)];
    }

    for(var i = 0; i < specialcount; i++){
        chars += specialcharacters[Math.floor(Math.random() * specialcharacters.length)];
    }

    //shuffle the characters from chars
    chars = chars.split("");
    for(var i = chars.length - 1; i > 0; i--){
        var j = Math.floor(Math.random() * (i + 1));
        var temp = chars[i];
        chars[i] = chars[j];
        chars[j] = temp;
    }
    password = chars.join("");

    return password;
}

function GenerateRandomPassword(length){
    var password = "";

    for(var i = 0; i < length; i++){
        password += allchar[Math.floor(Math.random() * allchar.length)];
    }

    password = password.split("");
    for(var i = password.length - 1; i > 0; i--){
        var j = Math.floor(Math.random() * (i + 1));
        var temp = password[i];
        password[i] = password[j];
        password[j] = temp;
    }
    password = password.join("");

    return password;
}

function GenPassSetChars({length, chars}){
    var password = "";

    for(var i = 0; i < length; i++){
        password += chars[Math.floor(Math.random() * chars.length)];
    }

    password = password.split("");
    for(var i = password.length - 1; i > 0; i--){
        var j = Math.floor(Math.random() * (i + 1));
        var temp = password[i];
        password[i] = password[j];
        password[j] = temp;
    }

    password = password.join("");

    return password;
}

module.exports = {GenerateWithControl, GenerateRandomPassword, GenPassSetChars};