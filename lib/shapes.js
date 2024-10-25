// Base class for shapes, provides common properties and methods
class Shape {
    constructor() {
      // Initialize color property for the shape
      this.color = '';
    }
  
    // Method to set the color of the shape
    setColor(color) {
      this.color = color;
    }
  }
  
  // Circle class that inherits from Shape
  class Circle extends Shape {
    // Method to return SVG string for rendering a circle
    render() {
      return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`;
    }
  }
  
  // Triangle class that inherits from Shape
  class Triangle extends Shape {
    // Method to return SVG string for rendering a triangle
    render() {
      return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
    }
  }
  
  // Square class that inherits from Shape
  class Square extends Shape {
    // Method to return SVG string for rendering a square
    render() {
      return `<rect x="50" y="50" width="200" height="200" fill="${this.color}" />`;
    }
  }
  
  // Export the Circle, Triangle, and Square classes for use in other files
  module.exports = { Circle, Triangle, Square };