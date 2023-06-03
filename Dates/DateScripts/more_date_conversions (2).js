"Use strict";

//Create Date objects 



//mom birthday mmm dd yyyy
//dad birthday using yyyy, m ,d

let myDate = new Date ("06/28/1998");  //short date  mm/ dd/ yyyy , birthday
let momDate = new Date("August 10 1977");//long date mmm / dd / yyyy
let dadDate = new Date (1974, 7, 09)// yyyy, mm , dd


console.log(myDate.toLocaleString());
console.log(momDate.toLocaleString());
console.log(dadDate.toLocaleString());