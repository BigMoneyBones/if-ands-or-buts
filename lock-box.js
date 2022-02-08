const prompt = require('prompt-sync')();

const pinCode = 1234;

console.log("Welcome to lockbox!")
let userPin = Number(prompt("Enter the 4-digit passcode: "));

if (pinCode === userPin) {
    console.log("Success...");
    console.log("Access granted.");
} else {
    console.log("ACCESS DENIED.");
}
