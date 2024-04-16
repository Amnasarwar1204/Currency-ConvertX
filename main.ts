#!/usr/bin/env node



import inquirer from "inquirer"
import chalk from "chalk"

const currency: any = {
    USD: 1,                         //base currency
    EUR: 0.91,
    GBP: 0.76,
    INR: 74.57,
    PKR: 280
};

console.log(chalk.yellowBright("<<<<<<<<<WELCOME TO THE CURRENCY EXCHANGE>>>>>>>>>"));

async function convertCurrency() {
    let userAns = await inquirer.prompt([
        {
            name: 'from',
            message: 'Enter from currency code',
            type: "list",
            choices: ["USD","EUR", "GBP", "INR", "PKR"]
        },
        {
            name: 'to',
            message: 'Enter to currency code',
            type: "list",
            choices: ["USD","EUR", "GBP", "INR", "PKR"]
        },
        {
            name: 'amount',
            message: 'Enter your Amount',
            type: "number"
        }
    ]);

    console.log("User input:", userAns);

    let fromRate = currency[userAns.from];
    let toRate = currency[userAns.to];
    let amount = userAns.amount;

    console.log("From Rate" , userAns.from);
    console.log("To Rate", userAns.to);
    console.log("Amount", amount);

    let convertAmount = (amount / fromRate) * toRate;

    console.log("Converted Amount:", convertAmount);
let select = await inquirer.prompt([
    {
        name : "continue",
        type : "confirm",
        message : "Do you want to continue?",
    }
])

   if(select.continue){
convertCurrency();}
else{console.log(chalk.greenBright("Goodbye"))

};
}

convertCurrency();














