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
var checkAge = function (age) {
    //age>18 return eligible for voting
    if (age > 18)
        return ("eligible for voting");
    else
        return ("not eligible for voting");
};
console.log(checkAge(5));
var calculate = function (num1, num2) {
    return ("product is ".concat(num1 * num2));
};
console.log(calculate(10, 20));
function trial() {
    console.log("java is fun");
}
function showData(fun) {
    console.log("inside show");
    fun("pramod");
    console.log("printing");
}
showData(trial);
console.log();
showData(function () {
    console.log("java is fun");
});
console.log();
showData(function (myname) {
    console.log("Hello ".concat(myname));
});
var summ = function (index, value, nums) {
    console.log(index);
    console.log(value);
    console.log(nums);
};
console.log();
nums.forEach(function (value) {
    console.log(value);
});
