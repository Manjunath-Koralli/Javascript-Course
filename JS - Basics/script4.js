/* 
    ternary operatorand switch statements
*/

var firstName1 = "John";
var age = 20;

age >= 18 ? console.log(firstName1 + ' drinks beer') :
            console.log(firstName1 + ' drinks juice');

var drink = age >= 18 ? "beer" : "juice";
console.log(drink);

var job = 'teacher';
switch(job){
    case 'teacher' : 
        console.log(firstName1 + ' is a teacher');
        break;
    case 'driver' :
        console.log(firstName1 + ' is a driver');
        break;
    default : 
        console.log(firstName1 + ' does somethign else');
        break;
}

switch(true){
    
}