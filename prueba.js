let N1=205;//Esto es ingresado desde el teclado
let N2=1000; //Esto es ingresado desde el teclado
//SE INCREMENTA POR SE DEBE HALLAR LOS QUE ESTAN COMPRENDIDOS ENTRE 12 - 20
//13,14,15,16,17,18 Y 19
N1=N1+1;
while(N1<N2){
let R=N1%10; //SE OBTIENE EL RESIDUO QUE VIENE A SER EL ULTIMO DIGITO
if(R==4) console.log(R);
N1=N1+1;
}