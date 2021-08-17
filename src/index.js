import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import Circle from "./components/Circle";
var c1 = new Circle("Blue");
c1.calculateArea();
ReactDOM.render(<App />, document.getElementById("root"));