/*Algoritmo figuras geometricas*/

const figura = ['triangulo', 'rectangulo', 'cuadrado', 'circulo']
//const calculo = ['area', 'perimetro']

const a = 10
const b = 15
const c = 7
const h = 8
const r = 5
const PI = 3.1415

var area = 0;
var perimetro = 0;

for (let i = 0; i < figura.length; i++) {
    
    if (figura[i] == 'triangulo') {
        area = b*h/2;
        perimetro = a+b+c;
        console.log('El área del ' + figura[i] + ' es ' + area);
        console.log('El perimetro del ' + figura[i] + ' es ' + perimetro);
    }
    else if (figura[i] == 'rectangulo') {
        area = b*a;
        perimetro = 2*(b+a);
        console.log('El área del ' + figura[i] + ' es ' + area);
        console.log('El perimetro del ' + figura[i] + ' es ' + perimetro);
    }
    else if (figura[i] == 'cuadrado') {
        area = a*a;
        perimetro = 4*a;
        console.log('El área del ' + figura[i] + ' es ' + area);
        console.log('El perimetro del ' + figura[i] + ' es ' + perimetro);
    }
    else if (figura[i] == 'circulo') {
        area = PI*(r*r);
        perimetro = 2*PI*(r*r);
        console.log('El área del ' + figura[i] + ' es ' + area);
        console.log('El perimetro del ' + figura[i] + ' es ' + perimetro);
    }
    else {
        console.log(figura[i] + ' no esta configurado')
    }
}
