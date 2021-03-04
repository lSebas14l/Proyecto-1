//Comenzamos pidiendo los datos al usuario
alert("Bienvenido en este ejercicio vamos a sumar y restar 2 numeros que usted elija");

let dato_1 = parseInt(prompt("Ingrese un numero"));

let dato_2 = parseInt(prompt("Ingrese otro numero"));

//Realizamos las operaciones
let suma = dato_1 + dato_2;
let resta = dato_1 - dato_2;

//Se entregan los resultados
alert("La suma de los numeros dados es " + suma);
alert("La resta de los numeros dados es " + resta);