"Use strict";

let hName = "Brenda Kaye";




function parseAndDisplayName(name) {

    let firstName = hName.slice(0, 6);
    let lastName = hName.slice(6, 11);
    let pos = hName.indexOf(" ");

    console.log("Name:" + name)
    console.log("First name: " + firstName);
    console.log("Last name: " + lastName);
    console.log("Spacing: " + pos)



    

}


parseAndDisplayName("Brenda Kaye");
parseAndDisplayName("Ian Auston");
parseAndDisplayName("Siddalee Grace");





let d = new Date();
console.log(d);