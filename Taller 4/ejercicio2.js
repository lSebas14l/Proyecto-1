/*Leer 10 enteros, almacenarlos en un vector y determinar en qué posición del vector está el
mayor número par leído.


1. Se crea un vector vacio
2. Se almacena ese vector con información aleatoria 
3. Se crea una variable llamada mayor_valor_par
4. Se crea una variable llamada valor_mayor
5. Se recorre el vector buscando el valor mayor y se divide en 2 (Si el resultado es un numero entero se guarda en mayor_valor_par)
 





*/

//1. creamos el vector vacío.
let vector = [];

//2. llenamos el vector
for(let i=0; i<10; i++){
    vector[i] = parseInt(Math.random() * (200 - 10) + 10);
}