const prompt = require('prompt-sync')();

let person1 = Number(prompt("Enter the amount provided by person 1: $")); //Amount paid by person1
let person2 = Number(prompt("Enter the amount provided by person 2: $")); //Amount paid by person2
let person3 = Number(prompt("Enter the amount provided by person 3: $")); //Amount paid by person3

let totalBill = (person1 + person2 + person3); //How much was paid by all 3 people combined.

if (person1 === person2 && person1 === person3) { //If all 3 people pay an even amount, no one owes any money to the others.
    console.log("No money is owed. Bill is split evenly.");
} else if ((person2 <= totalBill/3) && (person3 <= totalBill/3) && (person1 > totalBill/3)) { //If person2 and person3 paid their share, or less than their share, and person 1 paid more than their share
    let debt2 = ((totalBill/3) - person2);                                                    //take the total/3 to get the even amounts owed, and subtract whoever didnt pay enough to get the amount owed.
    let debt3 = ((totalBill/3) - person3);
    console.log("person2 owes person1 " + debt2 + " dollars and person3 owes person1 " + debt3 + " dollars.");
} else if ((person1 <= totalBill/3) && (person3 <= totalBill/3) && (person2 > totalBill/3)) {
    let debt1 = ((totalBill/3) - person1)
    let debt3 = ((totalBill/3) - person3)
    console.log("person1 owes person2 " + debt1 + " dollars and person3 owes person2 " + debt3 + " dollars.")
} else if ((person1 <= totalBill/3) && (person2 <= totalBill/3) && (person3 > totalBill/3)) {
    let debt1 = ((totalBill/3) - person1)
    let debt2 = ((totalBill/3) - person2)
    console.log("person1 owes person3 " + debt1 + " dollars and person2 owes person3 " + debt2 + " dollars.")
} else if ((person1 >= totalBill/3) && (person2 >= totalBill/3) && (person3 < totalBill/3)) {
    let debt1 = (person1 - (totalBill/3))                                                                           //Do the same formula for each possible scenario.
    let debt2 = (person2 - (totalBill/3))
    console.log("person3 owes person1 " + debt1 + " dollars and person3 owes person2 " + debt2 + " dollars.");
} else if ((person1 >= totalBill/3) && (person3 >= totalBill/3) && (person2 < totalBill/3)) {
    let debt1 = (person1 - (totalBill/3))
    let debt3 = (person3 - (totalBill/3))
    console.log("person2 owes person1 " + debt1 + " dollars and person2 owes person3 " + debt3 + " dollars.");
} else if ((person2 >= totalBill/3) && (person3 >= totalBill/3) && (person1 < totalBill/3)) {
    let debt2 = (person2 - (totalBill/3))
    let debt3 = (person3 - (totalBill/3))
    console.log("person1 owes person2 " + debt2 + " dollars and person1 owes person3 " + debt3 + " dollars.");
    
}

//Ex. 
//  Person1 = 12 Person2 = 10 Person3 = 8. The total would be 30. Divide 30 by 3 to get 10. Each person should pay 10 dollars.
//  person1 overpaid. person2 paid their share. and person3 underpaid.
//  To calculate this you would take the even share of 10, and subtract what was paid by person3. 10-8=2. person3 owes person1 2 dollars. 