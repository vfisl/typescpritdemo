export var message='welcome';

 export var greet=function(username:string):void{
    console.log(`Have a great day ${username}`);
}



export class Product{

    constructor(
        public itemName:string,
        public price:number
    ){}

    printDetails=()=>{

        console.log(`name:${this.itemName}`);
        console.log(`price:${this.price}`);
    }
       
    
}