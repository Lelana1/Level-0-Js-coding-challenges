/*Make a function that takes two strings as input, 
and outputs the common characters/letters that they share. 
(For example, Input: ‘house’, ‘computers’ . Output: ‘Common letters: o, u, e, s’)*/

function commonLetters(str1, str2) {
const commonChar = []
    var  i; 
    var j;

        for( i = 0; i < str1.length; i++) {
         for (j = 0; j < str2.length; j++) {
            if(str1.indexOf(str2[i]) == i++);
            commonChar.push(str1[i]);
                
         }
             
        return commonChar;  
        }
    } 
     
