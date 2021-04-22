/*Write a function that takes in three numbers. 
These numbers represent the lengths of the sides of a triangle. 
The function should return the area of a triangle*/

function areaOfAtriangle(x, y,z) {             //Heron's formula
    s = (x + y + z) /2;
    Area = Math.sqrt(s*((s-x)*(s-y)*(s-z)));   //{Area}}={\sqrt  {s(s-a)(s-b)(s-c)}},

    return Area;

}
