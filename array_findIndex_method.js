// array.prototype.findIndex
// array findeIndex method index return kore... main array ke change kore na
// findIndex method er vitor akta function likhte hobe
// findIndex method akta array er sob gula element e jabe...but jodi kokhono return true kora hoy tahole r porer element e jabe na
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var result = numbers.findIndex((currentValue, currentIndex, arr) => {
    //console.log(currentValue);
    // return currentValue >= 4;
    return currentValue > 20; // -1 return korbe..karon 20 er boro kon value nai array te
});

 console.log(result);