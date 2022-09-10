function sumofNums() {
    var nums = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nums[_i] = arguments[_i];
    }
    var sum = 0;
    nums.forEach(function (value) {
        sum += value;
    });
    console.log("Sum ".concat(sum));
}
// the values are combined into an array
sumofNums(90, 50, 60);
sumofNums(90, 50, 60, 80);
sumofNums(90, 20);
