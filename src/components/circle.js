var Shape = require('./shape.js');
class Circle extends Shape {
    constructor() { super(); this.radius = 9; }
    calculateArea() { return "Calculated area of circle"; }
}
module.exports = Circle;