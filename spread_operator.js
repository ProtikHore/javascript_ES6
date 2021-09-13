//spread operator in array

var numbers = [1, 2, 3];
// var newNumbers = [numbers[0], numbers[1], numbers[2], 4, 5];
var newNumbers = [...numbers, 4, 5];
console.log(newNumbers);


var newArrary = [1, 2, 3];
var a = [...newArrary]; //exact copy of newArrary array...newArray change hole a array change hobe na
var b = newArrary; // reference pathabe..mane newArray change hole b array o change hobe
newArrary.push(4);
console.log(newArrary);
console.log(a);
console.log(b);

var array1 = [1, 2, 3];
var array2 = [4, 5, 6];

var array = [...array1, ...array2]; //2ta array concate kore
console.log(array);



// spread operator in object

var myObj1 = {
    x: 1,
    y: 2
};

var myObj2 = {
    a: 1,
    b: 2
};

var myObj = {
    ...myObj1, ...myObj2
};
console.log(myObj);