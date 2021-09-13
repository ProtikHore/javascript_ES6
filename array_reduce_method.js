//Array.prototype.reduce()
//reudce akta array ke single value te convert kore
//reduc main array ke change kore na .. notun array return kore
var number = [1, 2, 3, 4, 5, 6];

var result = number.reduce((prevValue, currentValue, currentIndex, arr) => {
    return prevValue + currentValue;
}, 1);

console.log(number);
console.log(result);