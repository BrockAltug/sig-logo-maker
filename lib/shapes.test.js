// Import the Circle, Triangle, and Square classes from the shapes module
const { Circle, Triangle, Square } = require('./shapes');

// Test suite for the Circle class
describe('Circle', () => {
  // Test case to verify that the Circle renders correctly with the given color
  test('renders correctly', () => {
    const shape = new Circle(); 
    shape.setColor('blue');    
    // Check that the render method returns the expected SVG string 
    expect(shape.render()).toEqual('<circle cx="150" cy="100" r="80" fill="blue" />');
  });
});

// Test suite for the Triangle class
describe('Triangle', () => {
  // Test case to verify that the Triangle renders correctly with the given color
  test('renders correctly', () => {
    const shape = new Triangle(); 
    shape.setColor('green');       
    expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="green" />');
  });
});

// Test suite for the Square class
describe('Square', () => {
  // Test case to verify that the Square renders correctly with the given color
  test('renders correctly', () => {
    const shape = new Square(); 
    shape.setColor('red');    
    expect(shape.render()).toEqual('<rect x="50" y="50" width="200" height="200" fill="red" />');
  });
});