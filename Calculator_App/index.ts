import inquirer from 'inquirer';

import { add } from './modules/add.js';
import { subtract } from './modules/sub.js';
import { multiply } from './modules/mul.js';
import { divide } from './modules/div.js';
import { remainder } from './modules/rem.js';

const operations = ['Add', 'Subtract', 'Multiply', 'Divide','Remainder'];

inquirer
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
        console.log(`Result: ${add(a, b)}`);
        break;
      case 'Subtract':
        console.log(`Result: ${subtract(a, b)}`);
        break;
      case 'Multiply':
        console.log(`Result: ${multiply(a, b)}`);
        break;
      case 'Divide':
        console.log(`Result: ${divide(a, b)}`);
        break;
    case 'Remainder':
        console.log(`Result: ${remainder(a, b)}`);
        break;
    }
  });
