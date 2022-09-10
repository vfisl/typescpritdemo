"use strict";
// import {greet,Product,message } from "./trial";
exports.__esModule = true;
// console.log(message);
// var prod=new Product('Speaker',5000);
// prod.printDetails();
// greet('Pramod');
var greet = function (username) {
    console.log(" From the current module ".concat(username));
};
//import as a module
var mymodule = require("./trial");
console.log("".concat(mymodule.message));
mymodule.greet('Pramod'); //from trial
greet('Pam'); //from the same file
var prod = new mymodule.Product('Pen', 25);
prod.printDetails();
