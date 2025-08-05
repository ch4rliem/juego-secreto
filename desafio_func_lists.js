// 1 Crear una función que muestra "¡Hola, mundo!" en la consola.

function holaMundo (){
    console.log("Hola Mundo");
}

holaMundo();


// 2 Crear una función que reciba un nombre como parámetro y muestre "¡Hola, [nombre]!" en la consola.

function mostrarNombre (nombre) {
    console.log (`Hola ${nombre}`);
}
mostrarNombre("nombre");


//3 Crear una función que recibe un número como parámetro y devuelve el doble de ese número

function calcularDouble (numero){
    return numero * 2;
}
console.log(calcularDouble);

//4 Crear una función que recibe tres números como parámetros y devuelve su promedio.

function calcularPromedio(a,b,c) {
    return (a + b +c) / 3;

}
let promedio = calcularPromedio(7, 9, 12);
console.log(calcularPromedio);

// 5 Crear una función que recibe dos números como parámetros y devuelve el mayor de ellos.

function parametroMayor (){
    return valor1 >valor2 ? valor1 : valor2;
}
let numeroMayor = parametroMayor()
console.log(parametroMayor);

//6 Crear una función que recibe un número como parámetro y devuelve el resultado de multiplicar ese número por sí mismo.

function square(numero) {
    return numero * numero;
}

let resultado = sqare(2);
console.log(resultado);
