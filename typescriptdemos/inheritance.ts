class Employee{
    constructor(
        public name:string,
        public city:string
    ){}

    printDetails=()=>{
        console.log(`Name:${this.name}`);
        console.log(`City:${this.city}`);
    }
}

class Manager{
    constructor(
        public name:string,
        public city:string,
        public salary:number
        
    ){}

    calcBonus(amount:number){
        console.log(`Bonus:${amount}`);
    }

    show=(msg:string)=>{
        console.log(`msg:${msg}`);
    }
}
var manager = new  Manager('Pramod','Bijapur',20000);
manager.calcBonus(5000);
manager.city();



var emp=new Employee('Ram','Bang');
emp.printDetails();

