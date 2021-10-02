// A function called countAllFromTown. This function takes in two parameters: 
// The first is a string parameter of registration numbers seperated by commas
// The second one is a string prefix of the registration number.

function countAllFromTown(regString, Town){
    var regList = regString.split(',');
     var townList = [];
     var count = 0;
         for (var i=0;i<regList.length;i++){
         var newRegList = regList[i].trim()
         if(newRegList.includes(Town)){
           townList.push(newRegList);
           count++;
         }
       }
     return count
         
   }