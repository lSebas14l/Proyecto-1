let valor = parseInt(prompt("Escribe un número")); 
    let numeros;

    for (numeros=2;numeros < valor/2; numeros++) {
        if (valor % numeros === 0) {
            console.log(numeros," lo divide ");
        }
    }