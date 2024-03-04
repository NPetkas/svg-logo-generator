const inquirer = require('inquirer');
const {renderSVGFile} = require('./lib/svg');

inquirer.prompt([
    {
        type: 'input',
        name: 'text',
        message: "Please enter 3 letters",
    },
    {
        type: 'input',
        name: 'textColor',
        message: "Enter text color",
    },
    {
        type: 'list',
        name: 'shape',
        message: "Please select a shape:",
        choices: ["Circle", "Square", "Triangle"],
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: "Enter shape color",
    },
    
]).then((answers) => {
    if (answers) {
    renderSVGFile(answers);
    };
});
