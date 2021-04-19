/* Write a function that takes in a number representing the temperature 
in Celsius and returns the temperature in Fahrenheit. 
Write another function that does the opposite (Fahrenheit to Celsius)*/

function celsiusToFahrenheit(Celsius){
    var Fahrenheit = Celsius * (9/5); 
    Fahrenheit = (Celsius / 32);
    
    return Fahrenheit;

}

function fahrenheitToCelsius(fahrenheit){
    var celsius = fahrenheit - 32;
    celsius = fahrenheit * (5/9);
    
    return celsius;
}

