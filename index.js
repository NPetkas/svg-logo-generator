const inquirer = require('inquirer');
const {renderSVGLogo} = require('./lib/svg');

// inquirer questions prompt
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
    
// callback function to render logo after all questions are answered 
]).then((answers) => {
    if (answers) {
    renderSVGLogo(answers);
    };
});
