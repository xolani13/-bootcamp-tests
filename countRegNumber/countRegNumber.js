//A function called countRegNumber that takes in a string parameter that looks like 'CA 182736,CY 523519,CJ 812328'
// and returns the number of registration numbers in that given string. 

//---------------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------


function countRegNumber(stringReg){
    // stringReg currently looks like this:('CA 182736,CY 523519,CJ 812328')
    //create a new variable to store your array and use the split method to convert  string -> to an array
    var arrayReg = stringReg.split(','); 
    // the array now looks like this ["CA 182736","CY 523519","CJ 812328"]
      //Initiailze count to zero.
      var count = 0;
      for(var i =0;i<arrayReg.length;i++){
       //for loop to iterate my array and increase count with each element iterated.
       count++
      }
      return count
    }
    