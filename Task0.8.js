function timeConverter(num) {
var hour = Math.floor(num / 60); 
var minute = Math.round(num % 60); 
   let hourString = " hour";
   let minuteString = " minute";
let output = ""; 
    
    if (hour > 1 || hour ==0){
        hourString += "s";
    }
    if (minute > 1 || minute == 0){
        minuteString += "s";
    }

    output += hour + hourString + ", " + minute + minuteString;
     return output;
}
