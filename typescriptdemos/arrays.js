var nums = [20, 30, 40, 50];
console.log(nums[3]);
// console.log(nums[10]);
console.log(nums.length);
// nums.length=20;
// console.log(nums.length);
var sum = 0;
for (var index = 0; index < nums.length; index++) {
    var element = nums[index];
    sum += element;
}
console.log("sum is ".concat(sum));
console.log("For in");
for (var key in nums) {
    var element = nums[key];
    console.log(element);
}
console.log("for of");
for (var _i = 0, nums_1 = nums; _i < nums_1.length; _i++) {
    var val = nums_1[_i];
    console.log(val);
}
var names = ['Mango', 'Apple', 'Orange', 'Lemon'];
names.forEach(function (value) {
    if (value.match('o'))
        console.log(value);
});
