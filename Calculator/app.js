const readline = require('readline');

const add = require('./add');
const subtract = require('./subtract');
const multiply = require('./multiply');
const divide = require('./divide');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("Select operation : add, subtract, multiply, divide");

rl.question("Enter Operation :" ,(operation) => {
    rl.question("Enter first number: ", (num1) => {
        rl.question("Enter second number: ",(num2) => {
            const a = parseInt(num1);
            const b = parseInt(num2);

            let result;
            switch (operation.toLowerCase()){
                case 'add':
                    result = add(a,b);
                    break;
                case 'subtract':
                    result = subtract(a,b);
                    break;
                case 'multiply':
                    result = multiply(a,b);
                    break;
                case 'divide':
                    result = divide(a,b);
                    break;
                default:
                    console.log("Such operation doesn't exist");
                    rl.close();
                    return;
            }
            console.log(`The result is: ${result}`);
        rl.close();
        });
    });
});