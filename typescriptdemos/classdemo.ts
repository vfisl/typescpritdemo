class Student{
    constructor(
        public studName:string,
        public studId:number,
        public city:string,
        public department?:string, // ? means opttional. should be the last 
        public hobby:string='sports'){}//if u are using req parameter after optional provide default value

        // add a method
        printDetails=()=>{
            console.log(`Name:${this.studName}`);
            console.log(`Id:${this.studId}`);
            console.log(`City:${this.city}`);
            console.log(`department:${this.department}`);
            console.log(`hobby:${this.hobby}`);
        }
        showcourses=(...courses:string[]):void=>{
            courses.forEach(course=>console.log(`course: ${course}`))
        }
}
var student=new Student('Joe',10,'Bangalore');
student.printDetails();
console.log();

var student1=new Student('Pramod',11,'Bijapur','MECH');
student1.printDetails();
student1.showcourses('Java','Spring');

