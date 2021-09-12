var age = 12;

//normal condition
if(age >= 18) {
    console.log('Adult');
} else {
    console.log('Child');
}

//tarnary operator
var type = (age >= 18) ? 'Adult' : 'Child';

var type2 = (age >= 18) ? 'Adult' : (age < 10) ? 'Child' : 'Young';

console.log(type2);


var a = 5;

var access = (a > 5) ? true : false;
var access2 = (a > 5); // jodi return type true and false hoy tahole false er part tuko badh dewa jay

console.log(access2);