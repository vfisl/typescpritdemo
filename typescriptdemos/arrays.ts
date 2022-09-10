var nums=[20,30,40,50];
console.log(nums[3]);
// console.log(nums[10]);
console.log(nums.length);
// nums.length=20;
// console.log(nums.length);
var sum:number=0;
for (let index = 0; index < nums.length; index++) {
    const element = nums[index];
    
  sum+=element
}
console.log(`sum is ${sum}`);

console.log("For in")
for (const key in nums) {
   const element=nums[key];
   console.log(element)
}

console.log("for of")
for (const val of nums) {
    console.log(val);
}

var names=['Mango','Apple','Orange','Lemon'];

names.forEach((value:string)=>{
    
    if(value.match('o'))
     console.log(value);
     

    });