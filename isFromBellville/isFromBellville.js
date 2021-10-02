// Make use of the built-in startsWith method. This allows you to check the
// of a string. In this exercise we are required to find out if the registration
//is from Bellville from a given input of registration numbers. 
//Registration numbers from Bellville all begin with 'CY'
function isFromBellville(registrationNumbers) {
    if (registrationNumbers.startsWith('CY')) {
        return true;
    } else {
        return false
    }
}
