// Function to generate SVG content based on user input
function generateSVG(text, textColor, shape) {
  return `
<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
  ${shape.render()}  // Render the chosen shape with the specified color
  <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>  // Add text to the SVG, centered and styled
</svg>`;
}

// Export the generateSVG function for use in other modules
module.exports = { generateSVG };