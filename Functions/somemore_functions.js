"use strict";

function displayMailingLabel(name, address, city, state, zip){

   let shippingAddress = name + address + city + state + zip;
   console.log("Your shipping address is " + shippingAddress);

}


function addNumbers(num1, num2){
    let someNumber =  num1 + num2;
    console.log(someNumber);
}


function displayreceipt(totaldue, amountpaid){

    let changedue = amountpaid - totaldue;
    console.log(`Total change is $ ${changedue}`)

}


displayMailingLabel("Matt", "123 Seasame Street", "Chicago", "IL", "60001");
displayMailingLabel("John", "567 Beach Street", "Miami", "FL", "40001");
let PersonName = "Sarah";
let PersonAddress1 = "891 Freedom Way";
let PersonCity = "New York";
let PersonState = "NY";
let PersonPostalCode = "20001";
displayMailingLabel(PersonName ,PersonAddress1, PersonCity, PersonState, PersonPostalCode)

addNumbers(7, 1003);
addNumbers(10232, 8);

displayreceipt(48.73, 50);
displayreceipt(48.73, 100);


