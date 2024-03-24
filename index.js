#! /usr/bin/env node
import inquirer from "inquirer";
//printing a welcome note
console.log("\n\t Welcome To \'Ishas\' - CLI Simple Calculator\n");
let asnwer = await inquirer.prompt([
    { meisage: "Enter first number", type: "number", name: "fisrtNumber" },
    { message: "Enter second number", type: "number", name: "secondNumber" },
    {
        message: "Select one of the operators to perform action",
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"],
    },
]);
// conditional statement
if (asnwer.operator === "Addition") {
    console.log(asnwer.fisrtNumber + asnwer.secondNumber);
}
else if (asnwer.operator === "Subtraction") {
    console.log(asnwer.fisrtNumber - asnwer.secondNumber);
}
else if (asnwer.operator === "Multiplication") {
    console.log(asnwer.fisrtNumber * asnwer.secondNumber);
}
else if (asnwer.operator === "Division") {
    console.log(asnwer.fisrtNumber / asnwer.secondNumber);
}
else {
    console.log("Please select valid operator");
}
console.log("Here You have your answer");
