"use strict";
class Calculator {
    static calculate(a, b, operator) {
        switch (operator) {
            case '+':
                return a + b;
            case '-':
                return a - b;
            case '*':
                return a * b;
            case '/':
                return b !== 0 ? a / b : 'Error: Division by zero';
            case '%':
                return b !== 0 ? a % b : 'Error: Division by zero';
            default:
                return 'Error: Invalid operator';
        }
    }
}
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question('Enter first number: ', (num1) => {
    rl.question('Enter second number: ', (num2) => {
        rl.question('Enter operator (+, -, *, /, %): ', (op) => {
            const result = Calculator.calculate(parseFloat(num1), parseFloat(num2), op);
            console.log(`Result: ${result}`);
            rl.close();
        });
    });
});
