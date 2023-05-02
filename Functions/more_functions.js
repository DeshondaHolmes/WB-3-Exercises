"use strict";


function displayMailingLabel(name, address , city, state, zip){
    let mailingLabel = name + address + city + state +zip;

    console.log(`Your mailing label is: ${mailingLabel}`);

}

function addNumbers(num1,num2){
    let someNumber = num1 + num2;
    console.log("Here adding 2 numbers: " + someNumber);
}


function displayreceipt(totalDue,amountPaid){
    let changeDue = totalDue - amountPaid;
    console.log(`Change due: ${changeDue}`);
}


    let someName = "Deshonda Holmes";
    let someAddress = "123 elm street";
    let someCity = "Lawn Cutter";
    let someState = "Montana";
    let someZip = "33652";

    mailingLabel(someName, someAddress, someCity, someState, someZip);


    displayMailingLabel
    displayMailingLabel

 