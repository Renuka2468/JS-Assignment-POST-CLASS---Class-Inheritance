var shape = require("./shape.js");

class circle extends shape{
    constructor() {
        super();
        this.radius = 9;
    }
    calculateArea() {
        return("Calculated area of circle");
    }
}
module.export = circle;