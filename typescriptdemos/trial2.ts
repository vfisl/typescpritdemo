// import {greet,Product,message } from "./trial";

// console.log(message);

// var prod=new Product('Speaker',5000);
// prod.printDetails();

// greet('Pramod');

let greet=(username:string)=>{
    console.log(` From the current module ${username}`);
}

//import as a module
import * as mymodule from "./trial"

console.log(`${mymodule.message}`);
mymodule.greet('Pramod');//from trial
greet('Pam');//from the same file

var prod=new mymodule.Product('Pen',25);
prod.printDetails();