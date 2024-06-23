/*Algoritmo edades*/

var edades = [13, 14, 10, 8, 9, 40, 75, 26, 19, 63];
var menoresDeEdad = 0 
var mayoresDeEdad = 0
var adultosMayores = 0
var edadMinima = edades[0]
var edadMaxima = edades[0]
const promedioEdades = edades.length

for (let i = 0; i < edades.length; i++){
    if (edades[i] < 18){
        menoresDeEdad++;
    }
    else if (edades[i] >= 18 && edades[i] < 60 ){
        mayoresDeEdad++;
    } 
    else {
        adultosMayores++;
    }
    if (edades[i] < edadMinima){
        edadMinima = edades[3];
    }
    if (edades[i] > edadMaxima){
        edadMaxima = edades[6]; 
    }
} 

console.log('Personas menores de edad: ' + menoresDeEdad)
console.log('Personas mayores de edad: ' + mayoresDeEdad)
console.log('Adultos mayores de 60: ' + adultosMayores)
console.log('Edad mas baja: ' + edadMinima)
console.log('Edad mas alta: ' + edadMaxima)
console.log('Promedio de edades ingresadas: ' + promedioEdades)