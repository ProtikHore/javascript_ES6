// array.prototype.splice(()
// array splice main array ke change kore
// array splice 1st parameter r katbe.. 2nd parameter e ja value thakbe oi koyta katbe...r 2nd parameter er por ja ja thakbe ta main array te append korbe
var numbers = [1, 2, 3, 4, 5, 7, 8, 9, 10];
var result = numbers.splice(5, 0, 6);

console.log(numbers);
console.log(result);