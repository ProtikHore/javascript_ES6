// array.prototype.find
// array find method value return kore... main array ke change kore na
// find method er vitor akta function likhte hobe
// find method akta array er sob gula element e jabe...but jodi kokhono return true kora hoy tahole r porer element e jabe na
var numbers = [1, 2, 3, 4, 5, 6, 10];
var result = numbers.find(function(currentValue, currentIndex, arr) {
    //console.log(currentValue);
    return currentValue >= 4;
});

 console.log(result);