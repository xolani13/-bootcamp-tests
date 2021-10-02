function fromWhere(regNo) {
    if (regNo == 'CY') {
        return 'Bellville'
    }
    else if (regNo == 'CJ') {
        return 'Paarl'
    }
    else if (regNo == 'CA') {
        return 'Cape Town'
    }
    else {
        return 'Some other place!'
    }
}

//A function fromWhere that takes a car registration number as a parameter and returns the town the car is from.