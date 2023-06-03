"use strict";

//use retun (returning values)

function getNumGrandKids() {
    // in a better example, we might look this up in a database
    return 8;
}
let num = getNumGrandKids();
console.log(num);
console.log("# grandkids is " + getNumGrandKids());


console.log(`-------------------!`);
console.log(`Everything below seperate!`);

function add(num1, num2) {
    let sum = num1 + num2;
    console.log(sum);
    return sum;
}
// elsewhere
let a = 10, b = 20, c;
c = add(a, b);
console.log("The sum of " + a + " and " + b + " is " + c);