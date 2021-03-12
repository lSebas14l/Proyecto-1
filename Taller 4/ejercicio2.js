/*Leer 10 enteros, almacenarlos en un vector y determinar en qué posición del vector está el
mayor número par leído.*/

//1. creamos el vector vacío.
let vector = [];

//2. llenamos el vector
for(let i=0; i<10; i++){
    vector[i] = parseInt(Math.random() * (100 - 0) + 0);
}