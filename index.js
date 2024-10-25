const inquirer = require('inquirer');
const { Circle, Triangle, Square } = require('./lib/shapes');
const { generateSVG } = require('./lib/svgGenerator');
const fs = require('fs');

const questions = [
  {
    type: 'input',
    name: 'text',
    message: 'Enter up to three characters for the logo:',
    validate: (input) => input.length <= 3 || 'Text must be up to 3 characters.',
  },
  {
    type: 'input',
    name: 'textColor',
    message: 'Enter the text color (keyword or hexadecimal):',
  },
  {
    type: 'list',
    name: 'shape',
    message: 'Choose a shape for the logo:',
    choices: ['Circle', 'Triangle', 'Square'],
  },
  {
    type: 'input',
    name: 'shapeColor',
    message: 'Enter the shape color (keyword or hexadecimal):',
  },
];

function init() {
  inquirer.prompt(questions).then((answers) => {
    let shape;
    switch (answers.shape) {
      case 'Circle':
        shape = new Circle();
        break;
      case 'Triangle':
        shape = new Triangle();
        break;
      case 'Square':
        shape = new Square();
        break;
    }
    shape.setColor(answers.shapeColor);
    const svg = generateSVG(answers.text, answers.textColor, shape);
    fs.writeFileSync('./examples/logo.svg', svg);
    console.log('Generated logo.svg');
  });
}

init();