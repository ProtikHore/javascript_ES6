// array.prototype.filter()
// array filter method notun akta array return kore... main array ke change kore na
// filter method er vitor akta function likhte hobe
// filter method akta array er sob gula element e jabe...but jodi kokhono return true kora hoy tahole r porer element e jabe na
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var result = numbers.filter((currentValue, currentIndex, arr) => {
    return currentValue > 4;
});

 console.log(result);