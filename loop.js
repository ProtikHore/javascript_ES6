//for loop, for in, for of

for(var i = 1; i <= 5; i++) {
    console.log(i);
}

console.log(i);


//for in
//for in object er upor iteration kore... index return kore
const myObj = {
    name: 'Javasript',
    estd: '1995',
    founder: 'Brendan Eich'
};

for(property in myObj) {
    console.log(property);
}


// for of
// in use korle index pabo...r of use korle value pabo
const myArray = [1, 2, 3, 4, 5];
const myString = "Hello John";
for(element of myArray) {
    console.log(element);
}
for(element of myString) {
    console.log(element);
}