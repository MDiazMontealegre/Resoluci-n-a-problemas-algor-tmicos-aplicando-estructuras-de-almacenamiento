let vector1 = [1,5,8,11,20];
let vector2 = [3,9,14,16,28];

// Se unen los dos vectores en vector total con el metodo concat
let vectorTotal = vector1.concat(vector2);

// Se ordenan los valores de vectorTotal de manera ascendente
vectorTotal.sort(function (a,b) {
    return a-b;
});

console.log(vectorTotal);