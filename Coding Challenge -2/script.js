var johnScore = (89 + 120 + 103) / 3;
var mikeScore = (116 + 94 + 123) / 3;

if(johnScore > mikeScore) {
    console.log("John's team wins with " + johnScore + " points");
}
else if ( johnScore < mikeScore ) {
    console.log("Mike's team wins with " + mikeScore + " points");
}
else {
    console.log("There is a draw");
}