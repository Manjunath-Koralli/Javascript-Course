/* 
    truth and falsy values
*/

//falsy values - undefined null '' NaN
//truth values  - NOT falsy values

var height;
if(height) {
    console.log("Variable is defined");
}
else {
    console.log("Variable is not defined");
}

height = "23";
if(height) {
    console.log("Variable is defined");
}
else {
    console.log("Variable is not defined");
}

height = 0;
if(height) {
    console.log("Variable is defined");
}
else {
    console.log("Variable is not defined");
}

if(height || height === 0) {
    console.log("Variable is defined");
}
else {
    console.log("Variable is not defined");
}

height = '';
if(height) {
    console.log("Variable is defined");
}
else {
    console.log("Variable is not defined");
}
