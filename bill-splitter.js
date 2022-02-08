const prompt = require('prompt-sync')();

let person1 = Number(prompt("Enter the amount provided by person 1: $"));
let person2 = Number(prompt("Enter the amount provided by person 2: $"));
if (person1 === person2) {
    console.log("No money is owed to either party");
} else if (person1 > person2) {
    let evenSplit = ((person1 + person2) / 2) - person2;
    console.log("Person 2 owes person 1: $" + evenSplit);
} else if (person2 > person1) {
    let evenSplit2 = ((person2 + person1) /2) - person1;
    console.log("Person 1 owes person 2: $" + evenSplit2);
}