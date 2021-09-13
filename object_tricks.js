// important object tricks

var x = 5;
var y = 6;

var myObj = {
    name: 'Javascript',
    founder: 'Brendan Eich',
    estd: '1995',
    rangking: 1,
    x, // property and value same nam hole aivabe likha jay
    y
};

var objectKeys = Object.keys(myObj); // object thake only key return korbe
var objectValues = Object.values(myObj); // object thake only value return korbe
var objectEntries = Object.entries(myObj); // object thake entry return korbe
console.log(objectKeys); 
console.log(objectValues);
console.log(objectEntries);