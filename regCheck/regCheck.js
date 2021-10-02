// Write a fuction called regCheck, that can checks registration numbers from the four provinces:
// MP (Mpumalanga), GP (Gauteng), L (Limpopo) and EC (Eastern Cape)
// The function takes in two parameters and returns a boolean.

function regCheck(regNo, regEnd) {     
    return regNo.endsWith(regEnd)
}

// First input in the registration number i.e 452 254 GP and the last input is the suffix of the registration
