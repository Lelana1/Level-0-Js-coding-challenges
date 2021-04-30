function areaOfAtriangle(x, y,z) {            
    s = (x + y + z) /2;
    Area = Math.sqrt(s*((s-x)*(s-y)*(s-z)));   

    return Area;

}
