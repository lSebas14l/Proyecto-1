let numeros = [];

for(let i = 0; i<10; i++){
    numeros[i] = parseInt(Math.random() * (1000 - 100) + 100);
    let numerito = numeros[i];
    for (let d =1 ; i <numerito; d++) {
        if (numerito % d == 0 && (d == numerito || d == 1)) {

           let indiceEntero = d;
    
        }
        
    }
}

console.log(numeros);
console.log(indiceEntero);

