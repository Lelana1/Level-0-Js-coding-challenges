/*Make a function to convert any number into hours and minutes. 
(For example, 71 will become “1 hour, 11 minutes; 133 will become “2 hours, 13 minutes.)*/

function timeConverter(num) {

    hours = Math.floor(num / 60); 
    var minutes = (num % 60); 
    
    time = hours + " hour , " + minutes + " minute ";
    return time; 
}
