"use strict";



const dateField= document.getElementById("dateField");
console.log(dateField);

const submitButton = document.getElementById("submitButton");

const messagePara = document.getElementById("messagePara");

console.log(submitButton);


window.onload = function (){
    console.log("Window")

    submitButton.onclick = onSubmitButtonClick
  
}

function onSubmitButtonClick(){
    console.log("CLICKED")
    let dateField = new Date ()
    console.log(dateField.toString());
    console.log(dateField.getMonth() +1);

}
onSubmitButtonClick();
console.log(dateField);
