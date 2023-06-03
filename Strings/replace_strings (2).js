"use strict";

//message , replace "Dallas" with "Austin"
let message = "Our corporate offices are located in Dallas.";

//use .replace(" ...." , ".... ")
let newMessage = message.replace("Dallas", "Austin");

//use .replace(/...../i , "......")
let caseInSentiveMesaage = message.replace(/DALLAS/i , "Austin");

//output to replace "Dallas" with "Austin"
console.log(newMessage);


//output for case insensitive use /..../i
console.log(caseInSentiveMesaage);