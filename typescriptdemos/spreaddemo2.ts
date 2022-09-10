var nums=[10,20,30,40]
var nums1=[60,70,80,90];

//spread the array
//create a new array by spreading the values
var tenssarr = [...nums,...nums1,100]
console.log(`${tenssarr}`);

var emp1={name:'Jo',department:'Admin'}
var adress={city:'Ban',state:'Kar'}

var details={...emp1,...adress,mobile:90182,allowance:tenssarr}
console.log(details);