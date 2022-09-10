var nname:any;
nname='Pramod'
console.log(`${nname}`);
nname=['a','b']
console.log(`${nname}`);
nname=10000
console.log(`${nname}`);


var myval:string|number;
function printData(myval:string|number){
    if(typeof(myval)=='string')
    console.log(`Hello ${myval}`);
    else
    console.log(`square is ${Math.pow(myval,2)}`);
}

printData(10);
printData('Pramod');