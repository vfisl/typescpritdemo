// //function declaration
// function great(){
//     console.log(`great Day`)
// }
// var checknum=function(){}

// //function expression

// var sayhello=function(username:string){
//     console.log(`hello ${username}`)

// }
// sayhello('Pramod');

// var sayhello = function(username:string){
//     return(`hello ${username}`)

// }
// var result=sayhello('Pramod');
// console.log(result);
// console.log(sayhello('Pramod'));

var checkAge=function(age:number){
    //age>18 return eligible for voting
    if(age>18)
        return (`eligible for voting`);
    else
    return (`not eligible for voting`);

}
console.log(checkAge(5));

var calculate=function(num1:number,num2:number){
    return (`product is ${num1*num2}`);
}
console.log(calculate(10,20));


function trial(){
    console.log("java is fun");
}

function showData(fun:Function){
    console.log("inside show")
    fun(`pramod`);
    console.log("printing")
}
showData(trial);
console.log();

showData(()=>{
   console.log("java is fun");
});
console.log();

showData((myname:string)=>{
    console.log(`Hello ${myname}`);
});

var summ=function(index:number,value:number,nums:number[]){
    console.log(index);
    console.log(value);
    console.log(nums);
}
console.log();

nums.forEach((value:number)=>{
    console.log(value);
});








