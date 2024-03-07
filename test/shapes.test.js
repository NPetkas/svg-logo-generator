const { Circle, Triangle, Square } = require("../lib/shapes.js");

describe("Circle", () => {
  it("should set color", () => {
    const color = "blue";
    const circle = new Circle(color);
    expect(circle.color).toEqual(color);
  });
  it("should render a blue circle svg element", () => {
    const color = "blue";
    const circle = new Circle(color);
    expect(circle.render()).toBe(
      `<circle cx="150" cy="100" r="80" fill="${color}" />`
    );
  });
});
describe("Triangle", () => {
    it("should set color", () => {
      const color = "blue";
      const triangle = new Triangle(color);
      expect(triangle.color).toEqual(color);
    });
    it("should render a blue triangle svg element", () => {
      const color = "blue";
      const triangle = new Triangle(color);
      expect(triangle.render()).toBe(
        `<polygon points="150, 18 244, 182 56, 182" fill="${color}" />`
      );
    });
  });
  describe("Square", () => {
    it("should set color", () => {
      const color = "blue";
      const square = new Square(color);
      expect(square.color).toEqual(color);
    });
    it("should render a blue square svg element", () => {
      const color = "blue";
      const square = new Square(color);
      expect(square.render()).toBe(
        `<rect x="75" y="25" width="150" height="150" fill="${color}" />`
      );
    });
  });