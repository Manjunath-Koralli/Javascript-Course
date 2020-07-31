// BASICS
var firstName = "Manjunath";
console.log(firstName);
var lastName = "Koralli";
var age = 22;
console.log(firstName + " " + lastName + " age is " + age);
var fullAge = true;
console.log(fullAge);

var job;
//undefined - non existence
console.log(job);
job = "Programmer";
console.log(job);

//variable naming rules
//valid
var _3years = 3;
//not valid
//"error is" -  unexpected token if
//var if = "if";

/*
    - VARIABLE MUTATION AND TYPE COERCION
*/

var firstName1 = "Manjunath";
var age1 = 23;
console.log(firstName1 + ' ' + age1);

var job1, isMarried;
job1 = "Teacher";
isMarried = false;

//Type coercion isMarriedconveretd to string in concole.log
console.log(firstName1 + ' is a ' + age1 + ' year old ' + job1 + '. Is he married? ' + isMarried);

//Variable mutation - before a number now a string
age1 = "twenty three";
job1 = 'driver';
//alert(firstName1 + ' is a ' + age1 + ' year old ' + job1 + '. Is he married? ' + isMarried);

//var lastName1 = prompt('What is the last name?');
//console.log(firstName1 + " " + lastName1);

/* 
    Basic Operators
*/
var year, yearJohn,yearMark;
year = 2020;
yearJohn = year - 18;
yearMark = year - 20;

console.log(year);

//Math operators
console.log(year + 2);
console.log(year * 2);
console.log(year / 10);

//logical operators
var ageJohn = 28;
var ageMark = 33;
var johnOlder = ageJohn > ageMark; //false
johnOlder = ageJohn < ageMark; //true
console.log(johnOlder);

//typeof Operator
console.log(typeof johnOlder); //boolean
console.log(typeof ageJohn); //number
console.log(typeof firstName1); //string
var x;
console.log(typeof x); //undefined


/*
    Operator Precedence
*/
fullAge = 18;
var isFullAge = year - yearJohn >= fullAge; //true
console.log(isFullAge);

//Grouping, Multiple Assignments
var x,y;
x = y = (3 + 5) * 4 - 6; //8  8 4 - 6 //32 - 6 // 26 
// first y = 26 //then x = y 
console.log(x , y);

x *= 2 // x = x * 2; 
console.log(x);
x++ // x = x + 1
console.log(x);