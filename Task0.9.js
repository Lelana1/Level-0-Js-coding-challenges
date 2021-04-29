/*Write a function that takes in a string and then prints out all the vowels in the string. 
Make sure it can deal with capital letters and small letters.*/

function vowelsInAstring(str) {
    const input = str.toLowerCase();
    const vowels = ["a", "e", "i", "o", "u"];
    
    var vowelsfound = [];

    for (let i = 0; i < input.length; i++) {
        if(vowelsfound.includes(input[i])) continue; 
        if(vowels.includes(input[i])) (vowelsfound.push(input[i]));
     
        Output = " Vowels" + ": "  + (vowelsfound) + " ,";
        
    } 
       
    }
