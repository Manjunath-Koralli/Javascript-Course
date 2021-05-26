
var johnMass = 92 , johnHeight = 1.95;
var markMass = 72, markHeight = 1.69;

var BMIJohn = johnMass / ( johnHeight * johnHeight );
var BMIMark = markMass / ( markHeight * markHeight );

var higherBMI = BMIMark > BMIJohn;
console.log("Is Mark's BMI higher the John's BMI ? " + higherBMI);

//update after conditional statement video
if(BMIMark > BMIJohn){
    console.log("Mark's BMI higher the John's BMI");
}
else {
    console.log("John's BMI higher the Mark's BMI");
}