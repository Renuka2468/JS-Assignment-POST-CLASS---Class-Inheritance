class Shape{
    constructor(color) {
        this.color = color;
    }
    drawShape() {
        document.write("The color of the shape is " + this.color + "</br>");
    }
    calculateArea(){
        document.write("The color of the shape is " + this.color + "</br>");
    }
}
const instance = new Shape("red");
export default instance;