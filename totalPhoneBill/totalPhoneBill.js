// A function called totalPhoneBill that takes in a string of calls made and sms's sent.
// Uses this information to calculate the total phone bill.
// The billing cost R2.75 per call and R0.65 per sms. 
function totalPhoneBill(stringLog) {
    let counter = 0;

    var listLog = stringLog.split(',');
    for (i = 0; i < listLog.length; i++) {
        var xx = listLog[i].trim()
        if (xx.includes('call')) {
            counter += 2.75;
        } else if (xx.includes('sms')) {
            counter += 0.65;
            //console.log(counter)
        }
    }
    return "R" + counter.toFixed(2)
}