const csprng = require ( 'csprng-num' ) ;

const letters = "abcdefghijklmnopqrstuvwxyz";
const capitalletters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const specialcharacters = "!@#$%^&*()_+~`|}{[]\:;?><,./-=";

const allchar = letters + capitalletters + numbers + specialcharacters;

var passwordList = [];

function CheckUnique(password){
    if(passwordList.includes(password)){
        return false;
    }else{
        passwordList.push(password);
        return true;
    }
}

function SetPasswordList(list){
    passwordList = list;
    return true
}

function GenerateWithControl({lettercount, capitalcount, numbercount, specialcount}){

    var chars = "";
    var password = "";

    for(var i = 0; i < lettercount; i++){
        chars += letters[Math.floor(csprng() * letters.length)];
    }

    for(var i = 0; i < capitalcount; i++){
        chars += capitalletters[Math.floor(csprng() * capitalletters.length)];
    }

    for(var i = 0; i < numbercount; i++){
        chars += numbers[Math.floor(csprng() * numbers.length)];
    }

    for(var i = 0; i < specialcount; i++){
        chars += specialcharacters[Math.floor(csprng() * specialcharacters.length)];
    }

    //shuffle the characters from chars
    chars = chars.split("");
    for(var i = chars.length - 1; i > 0; i--){
        var j = Math.floor(csprng() * (i + 1));
        var temp = chars[i];
        chars[i] = chars[j];
        chars[j] = temp;
    }
    password = chars.join("");

    if(CheckUnique(password)){
        return password;
    }

    else {
        return GenerateWithControl({lettercount, capitalcount, numbercount, specialcount});
    }
}

function GenerateRandomPassword(length){
    var password = "";

    for(var i = 0; i < length; i++){
        password += allchar[Math.floor(csprng() * allchar.length)];
    }

    password = password.split("");
    for(var i = password.length - 1; i > 0; i--){
        var j = Math.floor(csprng() * (i + 1));
        var temp = password[i];
        password[i] = password[j];
        password[j] = temp;
    }
    password = password.join("");

    if(CheckUnique(password)){
        return password;
    }

    else {
        return GenerateRandomPassword(length);
    }
}

function GenPassSetChars({length, chars}){
    var password = "";

    for(var i = 0; i < length; i++){
        password += chars[Math.floor(csprng() * chars.length)];
    }

    password = password.split("");
    for(var i = password.length - 1; i > 0; i--){
        var j = Math.floor(csprng() * (i + 1));
        var temp = password[i];
        password[i] = password[j];
        password[j] = temp;
    }

    password = password.join("");

    if(CheckUnique(password)){
        return password;
    }

    else {
        GenPassSetChars({length, chars});
    }
}

function GetPass(){
    return passwordList;
}

module.exports = {GenerateWithControl, GenerateRandomPassword, GenPassSetChars, SetPasswordList, GetPass};