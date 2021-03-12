let valor = parseInt(prompt("Ingrese un numero para hayar la cantidad de digitos en el"));
let cant_numero = 0;
let temporal = valor;
let digito;

while (temporal>0) {     
    digito = temporal%10;
    temporal = (temporal-digito)/10;
    cant_numero = cant_numero+1;
      console.log("Digito es igual a: " + digito);
    
}
console.log("La cantidad de numeros es: " + cant_numero);