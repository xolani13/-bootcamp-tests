// A function called yearsAgo that takes in a year and returns how many years ago
// that year is from the current year.

function yearsAgo(Y){
    var cD = new Date();
    var cY = cD.getFullYear();
    return  cY - Y;
}