"use strict";

let acme = "ACME:123-L";
let di = "DI:12345-M";
let ace = "ACE:1-12";



function getSupplierCode() {

    let acmeFirst = acme.slice(0, 4);
    let diFirst = di.slice(0, 2);
    let aceFirst = ace.slice(0, 3);


    let code = (acmeFirst + "," + diFirst + ", " + aceFirst);
    console.log(code)

}

getSupplierCode();



