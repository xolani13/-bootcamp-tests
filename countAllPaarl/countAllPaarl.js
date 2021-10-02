// A function called allPaarl that takes a parameter string with registration numbers seperated
// seperated with commas and returns all the registration numbers in the string which are from paarl i.e CJ.

function allPaarl(regNoString) {
    var regNoList = regNoString.split(',')
    // Create an empty list to push in all registration numbers from paarl.
    var regNumbersForPaarl = [];
    for (var i = 0; i < regNoList.length; i++) {
        var newRegNoList = regNoList[i].trim()
        // The trim() method removes whitespace from both ends of a string.
        if (newRegNoList.startsWith('CJ')) {
            regNumbersForPaarl.push(newRegNoList);

        }

    }
    return regNumbersForPaarl
}
