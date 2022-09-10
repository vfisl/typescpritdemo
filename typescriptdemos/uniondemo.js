var nname;
nname = 'Pramod';
console.log("".concat(nname));
nname = ['a', 'b'];
console.log("".concat(nname));
nname = 10000;
console.log("".concat(nname));
var myval;
function printData(myval) {
    if (typeof (myval) == 'string')
        console.log("Hello ".concat(myval));
    else
        console.log("square is ".concat(Math.pow(myval, 2)));
}
printData(10);
printData('Pramod');
