const Shapes = require('./shapes');
const fs = require('fs');

class SVG {
    constructor() {
        this.text = '';
        this.shape = '';
    };

    setText(text, textColor) {
        if (this.shape === `<polygon points=150,0 260 150, 35 150" fill="" />`) {
            this.text = `<text x="150" y="140" font-size="50" text-anchor="middle" fill="${textColor}">${text}</text>`;
        } else {
            this.text = `<text x="150" y="120" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>`;
        }
    };

    setShape(shape) {
        this.shape = shape;
    };

    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.shape}${this.text}</svg>`;
      }; 
};

function renderSVGLogo(answers) {
    const svg = new SVG();
  
    svg.setText(answers.text, answers.textColor);
  
    switch (answers.shape) {
      case "Square":
        svg.setShape(Shapes.square(answers.shapeColor));
        break;
      case "Circle":
        svg.setShape(Shapes.circle(answers.shapeColor));
        break;
      case "Triangle":
        svg.setShape(Shapes.triangle(answers.shapeColor));
        break;
    };

    const svgContent = svg.render();

    fs.writeFile("logo.svg", svgContent, (err) =>
    err ? console.log(err) : console.log("Successfully Created!"))
};

module.exports = {SVG, renderSVGLogo};