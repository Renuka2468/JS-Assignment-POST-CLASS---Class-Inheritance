import React from "react";
import ReactDOM from "react-dom";
import shape from "./shape";

class Circle extends Shape{
    constructor(color) {
        super(color); 
    }
    calculateArea() {
        document.write("The color of the shape is " + this.color + "</br>");
    }
}
var c1 = new Circle("Blue");
c1.calculateArea();

module.exports = Circle;