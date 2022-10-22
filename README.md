There are some functions you can use

GenerateWithControl() here you can specify how many characters from what list you want to use usage: GenerateWithControl({lettercount: 12, capitalcount: 4, numbercount: 5, specialcount: 2}); this will return the password

Second you have GenerateRandomPassword() this generates a password with length that you speciefied where the characters that are used are completly random GenerateRandomPassword(23) generates password with length 23

As last we have the function GenPassSetChars() generates password with length that you specify you also set the characters that you want to use GenPassSetChars({length: 10, chars: "abcdef12345!@#"}); so it will return a password of length then and it will only use the characters abcdef12345!@#

All password are checked to the list of passwords if it is unique, if it is not the funtion will restart. You can push your own list of passwords to check if the password is unique you use the function SetPasswordList(list) where the paramater is the array type. Now when you generate a new password it will be added to the list On every completed function the password will be returned, if you want to get the list you will use the function GetPass() this will return the list containing all the passwords in an array datatype. Be warned the data is not encrypted or anything so the passwords are just in plain text.

for problems or suggestions create an Issue on github and i will look into it