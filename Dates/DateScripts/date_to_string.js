"use strict";

//JavaScript Dates 2-20 help
//pg 2-32 exercise

let d = new Date(); //get date and time from browser

//console.log(d); //output: 2023-05-04T17:21:55.795Z 

//console.log(d); // **Adding string text change to .tostring output
console.log("Exercises start here");
console.log( d.toString());   /*turn into sting include time zone
                                                             output :Thu May 04 2023 13:21:55 GMT-0400 (Eastern Daylight Time)*/


console.log(d.toUTCString()); //SHOWN AS UTC TIME AKA GMT TIME

console.log(d.toDateString()); // Show only date string 
console.log(d.toLocaleString()); //display current settings time displayed on user machine

                                                        