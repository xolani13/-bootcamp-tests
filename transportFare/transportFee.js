function transportFee(toD) {  
    if (toD == "morning") {
        return "R20"
    } else if (toD == "afternoon") {
        return "R10"
    } else {
        return "free"
    }

}

//This function called transportFee returns the amount needed for transport
// depending on the time of the day (toD)