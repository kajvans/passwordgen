You can use three different function

GenerateWithControl() here you can specify how many characters from what list you want to use usage:
GenerateWithControl({lettercount: 12, capitalcount: 4, numbercount: 5, specialcount: 2}); this will return the password

second you have GenerateRandomPassword() this generates a password with length that you speciefied where the characters that are used are completly random
GenerateRandomPassword(23) generates password with length 23

as last we have the function GenPassSetChars() generates password with length that you specify you also set the characters that you want to use
GenPassSetChars({length: 10, chars: "abcdef12345!@#"}); so it will return a password of length then and it will only use the characters abcdef12345!@#