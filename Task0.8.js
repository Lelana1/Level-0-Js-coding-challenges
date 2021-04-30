function timeConverter(num) {
var hour = Math.floor(num / 60); 
var minute = Math.round(num % 60); 
   
let output = ""; 
    
    if (hour > 1 && minute > 1) output += `${hour} hours, ${minute} minutes` ;
    if (hour > 1 && minute < 2) output += `${hour} hours, ${minute} minute` ;

    if ((hour < 2, minute > 1)) output += `${hour} hour, ${minute} minutes` ;  
 
     
}    
