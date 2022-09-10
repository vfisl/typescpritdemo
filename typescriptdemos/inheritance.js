var Employee = /** @class */ (function () {
    function Employee(name, city) {
        var _this = this;
        this.name = name;
        this.city = city;
        this.printDetails = function () {
            console.log("Name:".concat(_this.name));
            console.log("City:".concat(_this.city));
        };
    }
    return Employee;
}());
var Manager = /** @class */ (function () {
    function Manager(name, city, salary) {
        this.name = name;
        this.city = city;
        this.salary = salary;
        this.show = function (msg) {
            console.log("msg:".concat(msg));
        };
    }
    Manager.prototype.calcBonus = function (amount) {
        console.log("Bonus:".concat(amount));
    };
    return Manager;
}());
var manager = new Manager('Pramod', 'Bijapur', 20000);
manager.calcBonus(5000);
var emp = new Employee('Ram', 'Bang');
emp.printDetails();
