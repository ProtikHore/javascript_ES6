//Array.prototype.map()
//map is like loop
//map main array ke change kore na .. notun array return kore
var number = [1, 2, 3, 4, 5];

var result = number.map((num, index) => {
    //console.log(num);
    //console.log(index);
    return 2 * num;
});

console.log(number);
console.log(result);