/*Algoritmo edades*/

var edades = [13, 14, 10, 8, 9, 40, 75, 26, 19, 63];
var menoresDeEdad = 0;
var mayoresDeEdad = 0;
var adultosMayores = 0;
var edadMinima = edades[0];
var edadMaxima = edades[0];
var sumaEdades = 0;

for (let i = 0; i < edades.length; i++) {
    
    // Verifica el rango de edad
    if (edades[i] < 18) {
        menoresDeEdad++;
    }
    else if (edades[i] >= 18 && edades[i] < 60 ) {
        mayoresDeEdad++;
    } 
    else {
        adultosMayores++;
    }

    // Verifica edad máxima y edad mínima
    if (edades[i] < edadMinima) {
        edadMinima = edades[i];
    }
    if (edades[i] > edadMaxima) {
        edadMaxima = edades[i]; 
    }

    // Suma todas las edades
    sumaEdades = sumaEdades + edades[i];
} 

console.log('Personas menores de edad: ' + menoresDeEdad)
console.log('Personas mayores de edad y menores de 60: ' + mayoresDeEdad)
console.log('Adultos mayores o iguales de 60: ' + adultosMayores)
console.log('Edad mas baja: ' + edadMinima)
console.log('Edad mas alta: ' + edadMaxima)
console.log('Promedio de edades ingresadas: ' + sumaEdades/edades.length)