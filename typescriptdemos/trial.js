"use strict";
exports.__esModule = true;
exports.Product = exports.greet = exports.message = void 0;
exports.message = 'welcome';
var greet = function (username) {
    console.log("Have a great day ".concat(username));
};
exports.greet = greet;
var Product = /** @class */ (function () {
    function Product(itemName, price) {
        var _this = this;
        this.itemName = itemName;
        this.price = price;
        this.printDetails = function () {
            console.log("name:".concat(_this.itemName));
            console.log("price:".concat(_this.price));
        };
    }
    return Product;
}());
exports.Product = Product;
