var Student = /** @class */ (function () {
    function Student(studName, studId, city, department, // ? means opttional. should be the last 
    hobby) {
        if (hobby === void 0) { hobby = 'sports'; }
        var _this = this;
        this.studName = studName;
        this.studId = studId;
        this.city = city;
        this.department = department;
        this.hobby = hobby;
        // add a method
        this.printDetails = function () {
            console.log("Name:".concat(_this.studName));
            console.log("Id:".concat(_this.studId));
            console.log("City:".concat(_this.city));
            console.log("department:".concat(_this.department));
            console.log("hobby:".concat(_this.hobby));
        };
        this.showcourses = function () {
            var courses = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                courses[_i] = arguments[_i];
            }
            courses.forEach(function (course) { return console.log("course: ".concat(course)); });
        };
    } //if u are using req parameter after optional provide default value
    return Student;
}());
var student = new Student('Joe', 10, 'Bangalore');
student.printDetails();
console.log();
var student1 = new Student('Pramod', 11, 'Bijapur', 'MECH');
student1.printDetails();
student1.showcourses('Java', 'Spring');
