"use strict";

let messageCount = 0;

function display(msg) { // msg is the parameter
    let fullMessage = "Message #" + ++messageCount + ": " + msg;

    console.log(fullMessage)
}

// The literal "Howdy" is the argument
display("Howdy");
// The literal "Ya'll come back..." is the argument
display("Ya'll come back now, ya hear!");

// x is the argument
let x = "Tackle it Tuesday";
display(x);



//example passing through parameters 