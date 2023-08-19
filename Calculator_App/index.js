"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
const add_js_1 = require("./modules/add.js");
const sub_js_1 = require("./modules/sub.js");
const mul_js_1 = require("./modules/mul.js");
const div_js_1 = require("./modules/div.js");
const rem_js_1 = require("./modules/rem.js");
const operations = ['Add', 'Subtract', 'Multiply', 'Divide', 'Remainder'];
inquirer_1.default
    .prompt([
    {
        type: 'input',
        name: 'num1',
        message: 'Enter first number:',
        validate: (input) => !isNaN(Number(input)),
    },
    {
        type: 'input',
        name: 'num2',
        message: 'Enter second number:',
        validate: (input) => !isNaN(Number(input)),
    },
    {
        type: 'list',
        name: 'operation',
        message: 'Select operation:',
        choices: operations,
    },
])
    .then((answers) => {
    const a = Number(answers.num1);
    const b = Number(answers.num2);
    switch (answers.operation) {
        case 'Add':
            console.log(`Result: ${(0, add_js_1.add)(a, b)}`);
            break;
        case 'Subtract':
            console.log(`Result: ${(0, sub_js_1.subtract)(a, b)}`);
            break;
        case 'Multiply':
            console.log(`Result: ${(0, mul_js_1.multiply)(a, b)}`);
            break;
        case 'Divide':
            console.log(`Result: ${(0, div_js_1.divide)(a, b)}`);
            break;
        case 'Remainder':
            console.log(`Result: ${(0, rem_js_1.remainder)(a, b)}`);
            break;
    }
});
