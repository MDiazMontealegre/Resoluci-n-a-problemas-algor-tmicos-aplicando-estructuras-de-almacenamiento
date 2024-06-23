/*Algoritmo figuras geometricas*/

var figura = ['triangulo', 'rectangulo', 'cuadrado', 'cirulo']
const calculo = ['area', 'perimetro']

var a = 10
var b = 15
var c = 7
var h = 8
var r = 5
var PI = 3.1415

if (figura[0] == calculo[0]){
    console.log('El area del triangulo es de:', b*h/2)
    }if (figura[1] == calculo[0]) {
        console.log('El area del rectangulo es de:', b*a)
        }if (figura[2] == calculo[0]) {
            console.log('El area del cuadrado es de:', a*a)
            }if (figura[3] == calculo[0]) {
                console.log('El area del circulo es de:', PI*(r*r))
            }{
                (calculo[1])
                console.log('El perimetro del circulo es de', 2*PI*(r*r))
        }{
            (calculo[1])
            console.log('El perimetro del cuadrado es de:', 4*a)
    }{
        (calculo[1])
        console.log('El perimetro del rectangulo es de:', 2*(b+a))
}{
    (calculo[1])
   console.log('El perimetro del triangulo es de:', a+b+c)
}
