/*Write a function that takes in a string and then prints out all the vowels in the string. 
Make sure it can deal with capital letters and small letters.*/

function vowels(str) {
    return str.match(/[aeiou]/ig, '');
 
}

function vowels1(str) {
    return str.match(/[^aeiou]/ig, '');


}

