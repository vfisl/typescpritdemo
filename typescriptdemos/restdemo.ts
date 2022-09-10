function sumofNums(...nums:number[]){
    let sum=0;
    nums.forEach((value:number)=>{
         sum+=value;
    });
    console.log(`Sum ${sum}`);
}
// the values are combined into an array
sumofNums(90,50,60);
sumofNums(90,50,60,80);
sumofNums(90,20);