const prompt = require('prompt-sync')();

//User inputs amount paid by person 1.
let person1 = Number(prompt("Enter the amount provided by person 1: $"));
//User inputs amount paid by person 2.
let person2 = Number(prompt("Enter the amount provided by person 2: $"));


//If both persons paid an equal amount, log no money owed.
if (person1 === person2) {
    console.log("No money is owed to either party");
} else if (person1 > person2) {                               //If person 1 paid more than person 2, take total and divide it in half to get even amount,  
    let evenSplit = ((person1 + person2) / 2) - person2;      //then subtract person 2 from the even half to get amount owed to person 1. Log to screen.
    console.log("Person 2 owes person 1: $" + evenSplit);     
} else if (person2 > person1) {                               //Use the same concept in reverse if person 2 paid more than person 1. Log to screen.
    let evenSplit2 = ((person2 + person1) /2) - person1;
    console.log("Person 1 owes person 2: $" + evenSplit2);    //Log message and result to screen.
}