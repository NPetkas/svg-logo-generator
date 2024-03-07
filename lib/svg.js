const { Circle, Triangle, Square } = require("./shapes");
const fs = require("fs");

// SVG class with constructor to set text and shape based on user selection
class SVG {
  constructor() {
    this.text = "";
    this.shape = "";
  }

  setText(text, textColor) {
    if (
      this.shape === `<polygon points="150, 18 244, 182 56, 182" fill="" />`
    ) {
      this.text = `<text x="150" y="140" font-size="50" text-anchor="middle" fill="${textColor}">${text}</text>`;
    } else {
      this.text = `<text x="150" y="120" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>`;
    }
  }

  setShape(shape) {
    this.shape = shape;
  }

  render() {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.shape.render()}${this.text}</svg>`;
  }
}

// SVG logo render function to create logo based off svg class user selection
function renderSVGLogo(answers) {
  const svg = new SVG();

  svg.setText(answers.text, answers.textColor);

  switch (answers.shape) {
    case "Circle":
      svg.setShape(new Circle(answers.shapeColor));
      break;
    case "Square":
      svg.setShape(new Square(answers.shapeColor));
      break;
    case "Triangle":
      svg.setShape(new Triangle(answers.shapeColor));
      break;
  }

  const svgContent = svg.render();

  // writes/renders file/logo based off user selected values
  fs.writeFile("logo.svg", svgContent, (err) =>
    err ? console.log(err) : console.log("Successfully Created!")
  );
}

module.exports = { SVG, renderSVGLogo };
